

function showBtn(id){
    // Hidden Btn
    document.getElementById('donation').classList.add('hidden');
    document.getElementById('history').classList.add('hidden');
    // Show Btn Id
    document.getElementById(id).classList.remove('hidden');

}
document.getElementById('donation-btn').addEventListener('click',function(){
    document.getElementById('donation-btn').classList.add('bg-btn_color','border-none');
    document.getElementById('history-btn').classList.remove('bg-btn_color','border-none')
    // Show Btn
    showBtn('donation');
})
document.getElementById('history-btn').addEventListener('click',function(){
    document.getElementById('history-btn').classList.add('bg-btn_color','border-none');
    document.getElementById('donation-btn').classList.remove('bg-btn_color','border-none')

    // Show Btn
    showBtn('history');
})
// Go to Blog Page
document.getElementById('blog-btn').addEventListener('click',function(){
    window.location.href = './blog.html';
})
//Go to Home Page
function home(){
    window.location.href = './index.html'
}
