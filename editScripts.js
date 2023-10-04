function submitEdit() {
    const subject = document.getElementById('subjectInput').value;
    const color = document.getElementById('colorSelect').value;

    if (window.opener && window.opener.currentCell) {
        window.opener.currentCell.textContent = subject;
        window.opener.currentCell.style.backgroundColor = color;
        window.close();
    } else {
        alert("セルの更新に問題が発生しました。再試行してください。");
    }
}