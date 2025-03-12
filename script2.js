function checkAllQuestions() {
    console.log("nah")
    let allFilled = true;
    let errorMessage = "";

    // Kiểm tra 10 câu hỏi dạng ynquestion (radio, name từ 1 đến 10)
    for (let i = 1; i <= 10; i++) {
        const radios = document.getElementsByName(i.toString());
        const isChecked = Array.from(radios).some(radio => radio.checked);
        if (!isChecked) {
            allFilled = false;
            console.log(i);
            errorMessage += `Câu ${i} chưa được chọn.\n`;
        }
    }

    // Kiểm tra 10 câu hỏi dạng fourquestion (radio, name từ 11 đến 20)
    for (let i = 11; i <= 20; i++) {
        const radios = document.getElementsByName(i.toString());
        const isChecked = Array.from(radios).some(radio => radio.checked);
        if (!isChecked) {
            allFilled = false;
            console.log(i);
            errorMessage += `Câu ${i} chưa được chọn.\n`;
        }
    }

    // Kiểm tra 10 câu hỏi dạng multiquestion (checkbox, từ câu 21 đến 30)
    for (let i = 21; i <= 30; i++) {
        const checkboxes = document.querySelectorAll(`.multiquestion:nth-child(${i - 20}) input[type="checkbox"]`);
        const isChecked = Array.from(checkboxes).some(checkbox => checkbox.checked);
        if (!isChecked) {
            allFilled = false;
            console.log(i);
            errorMessage += `Câu ${i} chưa được chọn ít nhất một lựa chọn.\n`;
        }
    }

    // Kiểm tra 10 câu hỏi dạng writequestion (textarea, từ câu 31 đến 40)
    const textareas = document.querySelectorAll('.writequestion textarea');
    textareas.forEach((textarea, index) => {
        const questionNumber = 31 + index;
        if (textarea.value.trim() === "") {
            allFilled = false;
            errorMessage += `Câu ${questionNumber} chưa được điền.\n`;
        }
    });

    // Hiển thị kết quả
    if (allFilled) {
        alert("Tất cả các câu hỏi đã được điền đầy đủ!");
    } else {
        alert("Các câu hỏi sau chưa được điền đầy đủ:\n" + errorMessage);
    }

    return allFilled;
}

// document.getElementById("submitButton").addEventListener("submit", checkAllQuestions());

document.addEventListener("DOMContentLoaded", function() {
});
