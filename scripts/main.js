// constants -----------------------------------------------------------------
// const V1 = ['deal', 'dig', 'do', 'draw', 'dream', 'drink', 'drive', 'dwell', 'eat', 'fall', 'feed', 'feel', 'fight', 'find', 'flee', 'fling', 'fly', 'forbid', 'forecast', 'forget', 'freeze', 'get', 'give', 'go', 'grind', 'grow', 'hang', 'have', 'hear', 'heave', 'hew', 'hide', 'hit', 'hold', 'hurt'];
// const V2 = ['dealt', 'dug', 'did', 'drew', 'dreamt, dreamed', 'drank', 'drove', 'dwelt, dwelled', 'ate', 'fell', 'fed', 'felt', 'fought', 'found', 'fled', 'flung', 'flew', 'forbad, forbade', 'forecast, forecasted', 'forgot', 'froze', 'got', 'gave', 'went', 'ground', 'grew', 'hung', 'had', 'heard', 'heaved, hove', 'hewed', 'hid', 'hit', 'held', 'hurt'];
// const V3 = ['dealt', 'dug', 'done', 'drawn', 'dreamt, dreamed', 'drunk', 'driven', 'dwelt, dwelled', 'eaten', 'fallen', 'fed', 'felt', 'fought', 'found', 'fled', 'flung', 'flown', 'forbidden', 'forecast, forecasted', 'forgotten', 'frozen', 'got, gotten', 'given', 'gone', 'ground', 'grown', 'hung', 'had', 'heard', 'heaved, hove', 'hewn', 'hidden', 'hit', 'held', 'hurt'];
// const MEANINGS = ['Giao thiệp', 'Đào', 'Làm', 'Vẽ', 'Mơ', 'Uống', 'Lái xe', 'Ngụ, ở', 'Ăn', 'Rơi, ngã', 'Cho ăn, nuôi', 'Cảm thấy', 'Chiến đấu', 'Thấy', 'Chạy trốn', 'Tung, quăng', 'Bay', 'Cấm', 'Dự đoán', 'Quên', 'Đóng băng', 'Có được', 'Đưa', 'Đi', 'Nghiền, xay', 'Mọc, trồng', 'Treo lên', 'Có, sở hữu', 'Nghe', 'Trục lên', 'Chặt, đốn', 'Trốn', 'Đụng', 'Cầm, nắm', 'Làm đau']
const V1 = ['arise', 'awake', 'be', 'bear', 'beat', 'become', 'begin', 'bend', 'bind', 'bite', 'bleed', 'bless', 'blow', 'break', 'breed', 'bring', 'broadcast', 'build', 'burn', 'burst', 'buy', 'cast', 'catch', 'choose', 'cling', 'come', 'cost', 'creep', 'crow', 'cut', 'deal', 'dig', 'do', 'draw', 'dream', 'drink', 'drive', 'dwell', 'eat', 'fall', 'feed', 'feel', 'fight', 'find', 'flee', 'fling', 'fly', 'forbid', 'forecast', 'forget', 'freeze', 'get', 'give', 'go', 'grind', 'grow', 'hang', 'have', 'hear', 'heave', 'hew', 'hide', 'hit', 'hold', 'hurt'];
const V2 = ['arose', 'awoke, awaked', 'was, were', 'bore', 'beat', 'became', 'began', 'bent', 'bound', 'bit', 'bled', 'blessed', 'blew', 'broke', 'bred', 'brought', 'broadcast', 'built', 'burnt, burned', 'burst', 'bought', 'cast', 'caught', 'chose', 'clung', 'came', 'cost', 'crept', 'crew, crowed', 'cut', 'dealt', 'dug', 'did', 'drew', 'dreamt, dreamed', 'drank', 'drove', 'dwelt, dwelled', 'ate', 'fell', 'fed', 'felt', 'fought', 'found', 'fled', 'flung', 'flew', 'forbad, forbade', 'forecast, forecasted', 'forgot', 'froze', 'got', 'gave', 'went', 'ground', 'grew', 'hung', 'had', 'heard', 'heaved, hove', 'hewed', 'hid', 'hit', 'held', 'hurt'];
const V3 = ['arisen', 'awoken, awaked', 'been', 'borne', 'beaten, beat', 'become', 'begun', 'bent', 'bound', 'bitten', 'bled', 'blessed, blest', 'blown', 'broken', 'bred', 'brought', 'broadcast', 'built', 'burnt, burned', 'burst', 'bought', 'cast', 'caught', 'chosen', 'clung', 'come', 'cost', 'crept', 'crowed', 'cut', 'dealt', 'dug', 'done', 'drawn', 'dreamt, dreamed', 'drunk', 'driven', 'dwelt, dwelled', 'eaten', 'fallen', 'fed', 'felt', 'fought', 'found', 'fled', 'flung', 'flown', 'forbidden', 'forecast, forecasted', 'forgotten', 'frozen', 'got, gotten', 'given', 'gone', 'ground', 'grown', 'hung', 'had', 'heard', 'heaved, hove', 'hewn', 'hidden', 'hit', 'held', 'hurt'];
const MEANING = ['Phát sinh', 'Đánh thức, thức', 'Thì, là, ở', 'Mang, chịu đựng', 'Đánh, đánh bại', 'Trở nên', 'Bắt đầu', 'Bẻ cong, cuối xuống', 'Buộc, trói', 'Cắn, ngoạm', 'Chảy máu', 'Ban phước lành', 'Thổi', 'Vỡ, đạp vỡ', 'Nuôi, dạy dỗ', 'Mang đến', 'Phát thanh', 'Xây dựng', 'Đốt, cháy', 'Nổ tung', 'Mua', 'Ném, tung', 'Bắt, chụp', 'Chọn, lựa', 'Bám chặt', 'Đến', 'Trị giá', 'Bò', 'Gáy', 'Cắt', 'Giao thiệp', 'Đào', 'Làm', 'Vẽ', 'Mơ', 'Uống', 'Lái xe', 'Ngụ, ở', 'Ăn', 'Rơi, ngã', 'Cho ăn, nuôi', 'Cảm thấy', 'Chiến đấu', 'Thấy', 'Chạy trốn', 'Tung, quăng', 'Bay', 'Cấm', 'Dự đoán', 'Quên', 'Đóng băng', 'Có được', 'Đưa', 'Đi', 'Nghiền, xay', 'Mọc, trồng', 'Treo lên', 'Có, sở hữu', 'Nghe', 'Trục lên', 'Chặt, đốn', 'Trốn', 'Đụng', 'Cầm, nắm', 'Làm đau']
const TEST_SIZE = 10;

// globals -------------------------------------------------------------------
let randomizedWords = [];

// functions -----------------------------------------------------------------
function shuffle(array) {
	// source:
	// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
	
	let currentIndex = array.length,  randomIndex;

	// While there remain elements to shuffle...
	while (currentIndex != 0) {

		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;

		// And swap it with the current element.
		[array[currentIndex], array[randomIndex]] = [
		  array[randomIndex], array[currentIndex]];
	}

	return array;
}

function randomize() {
    // Hàm random trả về giá trị là chuỗi 4 mảng nối lại với
    // nhau, mỗi mảng chứa 10 từ theo đúng thứ tự tương ứng. Giá trị trả
    // về được gán vào biến toàn cục 'randomizedWords'
	
	// copy mảng
    var rv1 = [], rv2 = [], rv3 = [], rm = [];
	
	// xáo trộn thứ tự
	var indices = shuffle([...Array(V1.length).keys()])
	for (var i = 0; i < TEST_SIZE; i++) {
		rv1.push(V1[indices[i]]);
		rv2.push(V2[indices[i]]);
		rv3.push(V3[indices[i]]);
		rm.push(MEANING[indices[i]]);
	}
	
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

// ---------------------------------------------------------------------------
document.onclick = radioButtonOnClickHandler;
resetTable();