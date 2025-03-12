function checkAllQuestions(event) {
    event.preventDefault();
    let allFilled = true;
    let errorMessage = "";
    for (let i = 1; i <= 10; i++) {
        const radios = document.getElementsByName(i.toString());
        const isChecked = Array.from(radios).some(radio => radio.checked);
        if (!isChecked) {
            allFilled = false;
            errorMessage += `Cau ${i} chua duoc chon.\n`;
        }
    }

    for (let i = 11; i <= 20; i++) {
        const radios = document.getElementsByName(i.toString());
        const isChecked = Array.from(radios).some(radio => radio.checked);
        if (!isChecked) {
            allFilled = false;
            errorMessage += `Cau ${i} chua duoc chon.\n`;
        }
    }

    for (let i = 21; i <= 30; i++) {
        const checkboxes = document.querySelectorAll(`.multiquestion:nth-child(${i - 20}) input[type="checkbox"]`);
        const isChecked = Array.from(checkboxes).some(checkbox => checkbox.checked);
        if (!isChecked) {
            allFilled = false;
            errorMessage += `Cau ${i} chua duoc chon it nhat 1 dap an.\n`;
        }
    }

    const textareas = document.querySelectorAll('.writequestion textarea');
    textareas.forEach((textarea, index) => {
        const questionNumber = 31 + index;
        if (textarea.value.trim() === "") {
            allFilled = false;
            errorMessage += `Cau ${questionNumber} chua duoc dien.\n`;
        }
    });

    if (allFilled) {
        alert("Cac cau hoi da duoc dien day du. Cam on ban vi da tham gia!");
    } else {
        alert("Cac cau hoi chua duoc dien day du.\n" + errorMessage);
    }

        // return allFilled;
}
