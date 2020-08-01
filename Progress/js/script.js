let progressBar = $("#myProgressBar");
let progressWidth = $(".progress").width();
let currentProgressBarWidth = 0;




$("#plus1").click(function(){
    currentProgressBarWidth = currentProgressBarWidth + progressWidth * 0.01;
    console.log(currentProgressBarWidth);
    progressBar.width(currentProgressBarWidth + progressWidth * 0.01);
});
$("#plus3").click(function(){
    currentProgressBarWidth = currentProgressBarWidth + progressWidth * 0.03;
    console.log(currentProgressBarWidth);
    progressBar.width(currentProgressBarWidth + progressWidth * 0.03);
});
$('#plus7').click((function(){
    currentProgressBarWidth = currentProgressBarWidth + progressWidth * 0.07;
    console.log(currentProgressBarWidth);
    progressBar.width(currentProgressBarWidth + progressWidth * 0.07);
}));
