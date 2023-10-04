function submitEdit() {
    const subject = document.getElementById('subjectInput').value;
    const color = document.getElementById('colorSelect').value;

    localStorage.setItem('newSubject', subject);
    localStorage.setItem('newColor', color);

    window.close(); // 編集ページを閉じる
}
