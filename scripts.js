let currentCell = null;

function editCell(cell) {
    currentCell = cell; // 編集中のセルを保存
    window.open('edit.html', '_blank', 'width=400,height=200'); // 新しいページを新しいウィンドウで開く
}