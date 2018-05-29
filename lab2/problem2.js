const tree = {
    name : "home",
    files : ["notes.txt","todo.txt"],
    subFolders: [
        { name : "payroll",
            files : ["paper.pdf","funds.csv"],
            subFolders: []
        },
        { name: "misc",
            files : ["summer1.jpg","summer2.jpg", "summer3.jpg"],
            subFolders: [
                { name : "logs",
                    files : ["logs1","logs2","logs3","logs4"],
                    subFolders: []
                }]
        }]
};

var find = fileName => fileTree => {
    if(fileTree['files'].indexOf(fileName) > -1){
        return true;
    }

    for(let subFolder of fileTree.subFolders){
        if(find(fileName)(subFolder)){
            return true;
        }
    }

    return false;
};

console.log(find("paper.pdf")(tree)); // true
console.log(find("randomfile")(tree)); // false
console.log(find("notes.txt")(tree)); // true
