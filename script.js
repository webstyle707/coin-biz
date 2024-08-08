function url() {
    fbq("track", "Purchase");
    fbq("track", "SubmitApplication");
    location.href = "https://chat.whatsapp.com/DEwTmeThw93BqGjowUxCfE";
  }


  async function fetchCryptoData() {
    const url = 'https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,LTC,XRP,DASH,XMR,XEM,BCH&tsyms=USD';
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      const data = await response.json();
     document.getElementById('price1').innerHTML = data.DISPLAY.BTC.USD.PRICE;
     document.getElementById('price2').innerHTML = data.DISPLAY.ETH.USD.PRICE;


     if(data.DISPLAY.BTC.USD.CHANGEPCT24HOUR > 0){
      document.getElementById('hone').style.color = "ForestGreen";
      document.getElementById('hone').innerHTML = "+"+data.DISPLAY.BTC.USD.CHANGEPCT24HOUR+" %";
     }
     else{
      document.getElementById('hone').style.color = "red";
      document.getElementById('hone').innerHTML = data.DISPLAY.BTC.USD.CHANGEPCT24HOUR+" %";
     }

     if(data.DISPLAY.ETH.USD.CHANGEPCT24HOUR > 0){
      document.getElementById('htwo').style.color = "ForestGreen";
      document.getElementById('htwo').innerHTML = "+"+data.DISPLAY.ETH.USD.CHANGEPCT24HOUR+" %";
     }
     else{
      document.getElementById('htwo').style.color = "red";
      document.getElementById('htwo').innerHTML = data.DISPLAY.ETH.USD.CHANGEPCT24HOUR+" %";
     }
     
    } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
    }
  }

  fetchCryptoData();

let menu = document.getElementById("menu").style
let btnshow = document.getElementById("btnshow").style
let btnclose = document.getElementById("btnclose").style
let bgcolormenu = document.getElementById("bgcolormenu").style

const bgcolorshow = ()=>{
  bgcolormenu.transition = "all 0.6s ease";
  bgcolormenu.display = "block";
  bgcolormenu.background = "gray";
  bgcolormenu.opacity = "30%";
}

const bgcolorhide = ()=>{
  bgcolormenu.transition = "all 0.6s ease";
  bgcolormenu.display = "none";
  bgcolormenu.background = "gray";
  bgcolormenu.opacity = "50%";
}
  const showmenu = ()=>{
    menu.transition = "all 0.6s ease";
    menu.left = "0";
    btnshow.display = "none";
    btnclose.display = "block";
    setTimeout(() => {
      bgcolorshow()
    }, 400);
  }

  

  const showhide = ()=>{
    menu.transition = "all 0.6s ease";
    menu.left = "-100%";
    btnshow.display = "block";
    btnclose.display = "none";
    setTimeout(() => {
      bgcolorhide()
    }, 200);
  }

let scale1 = document.getElementById('scale1').style
let scale2 = document.getElementById('scale2').style
let scale3 = document.getElementById('scale3').style
let scale4 = document.getElementById('scale4').style
let scale5 = document.getElementById('scale5').style
let scale6 = document.getElementById('scale6').style
let scale7 = document.getElementById('scale7').style
  const handlehover1 = ()=>{
    scale1.transform = "scale(1.05)"
  }
  const handleclearhover1 = ()=>{
      scale1.transform = "scale(1)"
  }

  const handlehover2 = ()=>{
    scale2.transform = "scale(1.05)"
  }
  const handleclearhover2 = ()=>{
      scale2.transform = "scale(1)"
  }


  const handlehover3 = ()=>{
    scale3.transform = "scale(1.05)"
  }
  const handleclearhover3 = ()=>{
      scale3.transform = "scale(1)"
  }



  const handlehover4 = ()=>{
    scale4.transform = "scale(1.05)"
  }
  const handleclearhover4 = ()=>{
      scale4.transform = "scale(1)"
  }



  const handlehover5 = ()=>{
    scale5.transform = "scale(1.05)"
  }
  const handleclearhover5 = ()=>{
      scale5.transform = "scale(1)"
  }



  const handlehover6 = ()=>{
    scale6.transform = "scale(1.05)"
  }
  const handleclearhover6 = ()=>{
      scale6.transform = "scale(1)"
  }



  const handlehover7 = ()=>{
    scale7.transform = "scale(1.05)"
  }
  const handleclearhover7 = ()=>{
      scale7.transform = "scale(1)"
  }


