const fs = require('fs');
const path = require('path');

if (process.argv.length !== 4) {
    console.error('Required: node files_copier.js <source> <target>');
    process.exit(1);
}

const source = process.argv[2];
const target = process.argv[3];

function copyFiles(source, target, extensions) {
    fs.readdir(source, (err, files) => {
        if (err) {
            console.error('Error reading source!')
            process.exit(1)
        }

        const filteredFiles = files.filter(file => {
            const extension = path.extname(file).toLowerCase();
            return extensions.includes(extension);
        })

        filteredFiles.forEach(file => {
            const sourcePath = path.join(source, file);
            const targetPath = path.join(target, file);
            
            fs.copyFile(sourcePath, targetPath, err => {
                if (err) {
                    console.error('Error copying file!');
                    process.exit(1);
                }
            });
        })

    });
    console.log('Files copied successfully!');
}

const allowedExtensions = ['.txt', '.jpg'];

copyFiles(source, target, allowedExtensions);