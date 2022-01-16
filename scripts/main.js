const v1 = ['deal', 'dig', 'do', 'draw', 'dream', 'drink', 'drive', 'dwell', 'eat', 'fall', 'feed', 'feel', 'fight', 'find', 'flee', 'fling', 'fly', 'forbid', 'forecast', 'forget', 'freeze', 'get', 'give', 'go', 'grind', 'grow', 'hang', 'have', 'hear', 'heave', 'hew', 'hide', 'hit', 'hold', 'hurt'];
const v2 = ['dealt', 'dug', 'did', 'drew', 'dreamt, dreamed', 'drank', 'drove', 'dwelt, dwelled', 'ate', 'fell', 'fed', 'felt', 'fought', 'found', 'fled', 'flung', 'flew', 'forbad, forbade', 'forecast, forecasted', 'forgot', 'froze', 'got', 'gave', 'went', 'ground', 'grew', 'hung', 'had', 'heard', 'heaved, hove', 'hewed', 'hid', 'hit', 'held', 'hurt'];
const v3 = ['dealt', 'dug', 'done', 'drawn', 'dreamt, dreamed', 'drunk', 'driven', 'dwelt, dwelled', 'eaten', 'fallen', 'fed', 'felt', 'fought', 'found', 'fled', 'flung', 'flown', 'forbidden', 'forecast, forecasted', 'forgotten', 'frozen', 'got, gotten', 'given', 'gone', 'ground', 'grown', 'hung', 'had', 'heard', 'heaved, hove', 'hewn', 'hidden', 'hit', 'held', 'hurt'];
const meaning = ['Giao thiệp', 'Đào', 'Làm', 'Vẽ', 'Mơ', 'Uống', 'Lái xe', 'Ngụ, ở', 'Ăn', 'Rơi, ngã', 'Cho ăn, nuôi', 'Cảm thấy', 'Chiến đấu', 'Thấy', 'Chạy trốn', 'Tung, quăng', 'Bay', 'Cấm', 'Dự đoán', 'Quên', 'Đóng băng', 'Có được', 'Đưa', 'Đi', 'Nghiền, xay', 'Mọc, trồng', 'Treo lên', 'Có, sở hữu', 'Nghe', 'Trục lên', 'Chặt, đốn', 'Trốn', 'Đụng', 'Cầm, nắm', 'Làm đau']

let randomizedWords = [];

function randomize() {
    // Hàm random trả về giá trị là chuỗi 4 mảng nối lại với
    // nhau, mỗi mảng chứa 10 từ theo đúng thứ tự tương ứng. Giá trị trả
    // về được gán vào biến toàn cục 'randomizedWords'
    
    // TODO: viết hàm random thật
    rv1 = v1.slice(0, 10);
    rv2 = v2.slice(0, 10);
    rv3 = v3.slice(0, 10);
    rm = meaning.slice(0, 10);
    
    randomizedWords = rv1.concat(rv2).concat(rv3).concat(rm);
}

function resetTable() {
    var colStart = Number(document.querySelector('input[name="hint"]:checked').value);
    
    for (var i = 0; i < 40; i++) {
        document.getElementById(i).innerHTML = "";
    }
    
    randomize()
    
    for (var i = colStart; i < colStart + 10; i++) {
        document.getElementById(i).innerHTML = randomizedWords[i];
    }
}

function showAnswers() {
    // TODO:
    // - Add a loop to fill all cols with generated contents
    document.getElementById(2).innerHTML = "YO";
    for (var i = 0; i < 40; i++) {
        document.getElementById(i).innerHTML = randomizedWords[i];
    }
}

function radioButtonOnClickHandler(e) {
    var realTarget = e ? e.target : window.event.srcElement;
    if (realTarget.nodeName.toLowerCase() === 'input' && realTarget.type === 'radio' ) {
        resetTable(); 
    } 
}

document.onclick = radioButtonOnClickHandler;
resetTable();