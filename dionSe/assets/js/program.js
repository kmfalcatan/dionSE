function addProgram(){
    const addProgramButton = document.querySelector('.addContainer');

    if(addProgramButton.style.display === 'none'){
        addProgramButton.style.display = 'block';
    } else{
        addProgramButton .style.display = 'none'
    }
}

function editProgram(){
    const editProgramButton = document.querySelector('.editContainer');

    if(editProgramButton.style.display === 'none'){
        editProgramButton.style.display = 'block';
    } else{
        editProgramButton .style.display = 'none'
    }
}