let currentCell = null;

function editCell(cell) {
    currentCell = cell; // 編集中のセルを保存
    document.getElementById('subjectInput').value = cell.textContent;
    document.getElementById('colorSelect').value = cell.style.backgroundColor || "#FFFFFF";
    document.querySelector('.edit-area').style.display = 'block'; // 編集エリアを表示
}

function submitEdit() {
    const subject = document.getElementById('subjectInput').value;
    const color = document.getElementById('colorSelect').value;

    if (currentCell) {
        currentCell.textContent = subject;
        currentCell.style.backgroundColor = color;
        document.querySelector('.edit-area').style.display = 'none'; // 編集エリアを非表示にする
    }
}