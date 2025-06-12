const fs = require('fs').promises;
const path = require('path');
const ASTProcessor = require('./astProcessor');

class FileProcessor {
    constructor() {
        this.astProcessor = new ASTProcessor();
        this.supportedExtensions = ['.js', '.jsx', '.ts', '.tsx'];
    }

    async processDirectory(directoryPath) {
        try {
            const allStrings = [];
            const files = await this.getAllFiles(directoryPath);

            for (const file of files) {
                if (this.isSupportedFile(file)) {
                    const strings = this.astProcessor.parseFile(file);
                    this.astProcessor.clear()
                    allStrings.push(...strings);
                }
                console.log('adfasdf', allStrings)
            }
            console.log(allStrings)
            return allStrings;
        } catch (error) {
            console.error('Error processing directory:', error);
            throw error;
        } finally {
            this.astProcessor.clear();
        }
    }

    async getAllFiles(dirPath) {
        const files = [];
        const items = await fs.readdir(dirPath, { withFileTypes: true });

        for (const item of items) {
            const fullPath = path.join(dirPath, item.name);

            if (item.isDirectory()) {
                // Skip node_modules and .git directories
                if (item.name === 'node_modules' || item.name === '.git') {
                    continue;
                }
                const subFiles = await this.getAllFiles(fullPath);
                files.push(...subFiles);
            } else {
                files.push(fullPath);
            }
        }

        return files;
    }

    isSupportedFile(filePath) {
        const ext = path.extname(filePath).toLowerCase();
        return this.supportedExtensions.includes(ext);
    }
}

module.exports = FileProcessor;
