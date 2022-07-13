console.log('drag and drop 768');

const imgBox = document.querySelector('.imgBox');
const whiteBoxes = document.getElementsByClassName('whiteBox');

imgBox.addEventListener('dragstart', (e)=>{
    console.log('dragstart has been triggered');
    e.target.className += ' hold';
    setTimeout(() => {
      e.target.className = 'hide'
    },0)
});

imgBox.addEventListener('dragend', (e)=>{
    e.target.className = 'imgBox';
    console.log('dragend has been triggered');
});

for (wBox of whiteBoxes){
    wBox.addEventListener('dragover',(e)=>{
        e.preventDefault();
        console.log('dragOver has been triggered')
    });

    wBox.addEventListener('dragenter',(e)=>{
        e.target.className += ' dashed'
        console.log('dragEnter has been triggered')


    })

    wBox.addEventListener('dragleave',(e)=>{
        e.target.className = 'whiteBox'
        console.log('dragLeave has been triggered')

    })

    wBox.addEventListener('drop',(e)=>{
        e.target.append(imgBox)
        console.log('drop')

    })

}
