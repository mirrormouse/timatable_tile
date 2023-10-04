function editCell(cell) {
    localStorage.setItem('editingCellIndex', Array.from(cell.parentNode.children).indexOf(cell)); // セルのインデックスを保存
    window.open('edit.html', '_blank', 'width=400,height=200');
}

// ページ読み込み時、またはウィンドウフォーカス時にlocalStorageの変更を確認する
window.addEventListener('focus', () => {
    const newSubject = localStorage.getItem('newSubject');
    const newColor = localStorage.getItem('newColor');
    const cellIndex = parseInt(localStorage.getItem('editingCellIndex'));

    if (newSubject !== null && newColor !== null && !isNaN(cellIndex)) {
        document.querySelector(`.row:nth-child(${cellIndex + 2}) > div:nth-child(${cellIndex + 1})`).textContent = newSubject;
        document.querySelector(`.row:nth-child(${cellIndex + 2}) > div:nth-child(${cellIndex + 1})`).style.backgroundColor = newColor;
        localStorage.removeItem('newSubject'); // 使用後にデータをクリア
        localStorage.removeItem('newColor'); // 使用後にデータをクリア
    }
});
