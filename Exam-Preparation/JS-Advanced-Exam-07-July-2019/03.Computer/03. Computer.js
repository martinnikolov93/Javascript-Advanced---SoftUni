class Computer {
    ramMemory;
    cpuGHz;
    hddMemory;
    taskManager;
    installedPrograms;

    constructor(ramMemory, cpuGHz, hddMemory) {
        this.ramMemory = ramMemory;
        this.cpuGHz = cpuGHz;
        this.hddMemory = hddMemory;
        this.taskManager = [];
        this.installedPrograms = [];
    }

    installAProgram(name, requiredSpace) {
        if (this.hddMemory < requiredSpace) {
            throw new Error('There is not enough space on the hard drive');
        }

        let program = {name: name, requiredSpace: requiredSpace};

        this.installedPrograms.push(program);
        this.hddMemory -= requiredSpace;

        return program;
    }

    uninstallAProgram(name) {

        let isInstalled = this.installedPrograms.filter(p => p.name === name);
        if (!isInstalled){
            throw new Error('Control panel is not responding');
        }

        for (let i = 0; i < this.installedPrograms.length; i++) {
            let program = this.installedPrograms[i];
            if (name === program.name) {
                this.hddMemory += program.requiredSpace;
                this.installedPrograms.splice(i, 1);
                break;
            }
        }

        for (let i = 0; i < this.taskManager.length; i++) {
            let program = this.taskManager[i];
            if (name === program.name) {
                this.taskManager.splice(i, 1);
                break;
            }
        }

        return this.installedPrograms;
    }

    openAProgram(name) {
        let program = this.installedPrograms.filter(p => p.name === name)[0];

        if (program === undefined){
            throw new Error(`The ${name} is not recognized`);
        }

        let isOpened = this.taskManager.filter(p => p.name === name)[0];
        let isInstalled = this.installedPrograms.filter(p => p.name === name)[0];
        if (isOpened !== undefined && isInstalled !== undefined){
            throw new Error(`The ${name} is already open`)
        }

        let totalMemoryUsedPercentage = 0;
        for (let i = 0; i < this.taskManager.length; i++) {
            let currentProgram = this.taskManager[i];
            let currentRamPercentage = (currentProgram.requiredSpace / this.ramMemory) * 1.5;
            totalMemoryUsedPercentage += currentRamPercentage;
        }
        let ramMemoryNeededPercentage = (program.requiredSpace / this.ramMemory) * 1.5;
        if (totalMemoryUsedPercentage + ramMemoryNeededPercentage >= 100){
            throw new Error(`${name} caused out of memory exception`);
        }

        let totalCPUUsedPercentage = 0;
        for (let i = 0; i < this.taskManager.length; i++) {
            let currentProgram = this.taskManager[i];
            let currentCPUPercentage = ((currentProgram.requiredSpace / this.cpuGHz) / 500) * 1.5;
            totalCPUUsedPercentage += currentCPUPercentage;
        }
        let cpuUsageNeededPercentage = ((program.requiredSpace / this.cpuGHz) / 500) * 1.5;
        if (totalCPUUsedPercentage + cpuUsageNeededPercentage >= 100){
            throw new Error(`${name} caused out of cpu exception`)
        }

        let openedProgram = {name: name, ramUsage: ramMemoryNeededPercentage, cpuUsage: cpuUsageNeededPercentage};

        this.taskManager.push(openedProgram);

        return openedProgram;
    }

    taskManagerView() {
        if (this.taskManager.length === 0){
            return 'All running smooth so far';
        } else {
            let stringBuilder = '';

            for (let i = 0; i < this.taskManager.length; i++) {
                let program = this.taskManager[i];
                stringBuilder += `Name - ${program.name} | Usage - CPU: ${program.cpuUsage.toFixed(0)}%, RAM: ${program.ramUsage.toFixed(0)}%`;

                if (i !== this.taskManager.length - 1){
                    stringBuilder += '\n';
                }
            }

            return stringBuilder;
        }
    }
}

let computer = new Computer(4096, 7.5, 250000);

computer.installAProgram('Word', 7300);

//computer.openAProgram('Word');

console.log(computer.taskManagerView());


