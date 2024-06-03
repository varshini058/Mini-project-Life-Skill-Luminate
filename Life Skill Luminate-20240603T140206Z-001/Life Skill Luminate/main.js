var i = 0;
var j=0;
var k=0;
var l=0;
var m=0;
var n=0;
var o=0;
var speed=50;
var txt_meat = "Eating meat offers numerous benefits including its richness in essential nutrients like protein, vitamins, and minerals crucial for overall health. It supports muscle growth and repair, aids in weight management by providing satiety, and ensures the high absorption of important nutrients like iron and zinc.";
var txt_bev = "A drink or beverage is a liquid intended for human consumption. In addition to their basic function of satisfying thirst, drinks play important roles in human culture.Common types of drinks include plain drinking water, milk, juice, smoothies and soft drinks.";
var txt_pack="In the bustling aisles of supermarkets, packed food items line the shelves, offering convenience for busy shoppers. These pre-packaged goods range from canned soups and pasta sauces to boxed cereals and snacks, catering to diverse tastes and dietary preferences.";
var txt_bake="Baked goods are foods made from dough or batter and cooked by baking, a method of cooking food that uses prolonged dry heat, normally in an oven, but also in hot ashes, or on hot stones. The most common baked item is bread but many other types of foods are baked as well.Bakery and baked goods categories like bars, breads , cookies, desserts , muffins etc.";
var txt_fruit="Fruits are a good source of vitamins and minerals, recognized for their role in preventing vitamin C and vitamin A deficiencies. People who incorporate fruits and vegetables as part of a healthy eating pattern have a reduced risk of some chronic diseases. ";
var txt_vege="Vegetables are parts of plants that are consumed by humans or other animals as food. The original meaning is still commonly used and is applied to plants collectively to refer to all edible plant matter, including the flowers, fruits, stems, leaves, roots, and seeds.";
var txt_dairy="Dairy products are the kinds of foods that are obtained primarily from or contain milk of mammals such as cattle, goats, sheep, etc. Dairy products include a variety of foods such as cheese, butter, yogurt, and many more.";

function typeWriterMeat() {
  if (i < txt_meat.length) {
    document.getElementById("demo_meat").innerHTML += txt_meat.charAt(i);
    i++;
    setTimeout(typeWriterMeat, speed);
  }
  else{
    setTimeout(function(){
        document.getElementById("imgmeat").style.animation="fade 4s forwards";
    },2000);
    
  }
}

function typeWriterbev() {
    if (j < txt_bev.length) {
        document.getElementById("demo_bev").innerHTML += txt_bev.charAt(j);
        j++;
        setTimeout(typeWriterbev, speed);
    }
    else{
        setTimeout(function(){
            document.getElementById("imgbev").style.animation = "fade 4s forwards"; 
         }, 2000);
      }
    }

function typeWriterpack() {
  
    if (k < txt_pack.length) {
        document.getElementById("demo_pack").innerHTML += txt_pack.charAt(k);
        k++;
        setTimeout(typeWriterpack, speed);
        }
    else{
        setTimeout(function(){
        document.getElementById("imgpack").style.animation = "fade 4s forwards"; 
        }, 2000);
    }
}

function typeWriterbake() {
  
    if (l < txt_bake.length) {
        document.getElementById("demo_bake").innerHTML += txt_bake.charAt(l);
        l++;
        setTimeout(typeWriterbake, speed);
        }
    else{
        setTimeout(function(){
        document.getElementById("imgbaked").style.animation = "fade 4s forwards"; 
        }, 2000);
    }
}

function typeWriterfruit() {
  
    if (m < txt_fruit.length) {
        document.getElementById("demo_fruit").innerHTML += txt_fruit.charAt(m);
        m++;
        setTimeout(typeWriterfruit, speed);
        }
    else{
        setTimeout(function(){
        document.getElementById("imgfruits").style.animation = "fade 4s forwards"; 
        }, 2000);
    }
}

function typeWritervege() {
  
    if (n < txt_vege.length) {
        document.getElementById("demo_vege").innerHTML += txt_vege.charAt(n);
        n++;
        setTimeout(typeWritervege, speed);
        }
    else{
        setTimeout(function(){
        document.getElementById("imgveggies").style.animation = "fade 4s forwards"; 
        }, 2000);
    }
}

function typeWriterdairy() {
  
    if (o < txt_dairy.length) {
        document.getElementById("demo_dairy").innerHTML += txt_dairy.charAt(o);
        o++;
        setTimeout(typeWriterdairy, speed);
        }
    else{
        setTimeout(function(){
        document.getElementById("imgdairy").style.anim = "fade 4s forwards"; 
        }, 2000);
    }
}

function display(event){
    if(event.target.id=="meat"){
        const imgmeat=document.getElementById("imgmeat");
        imgmeat.style.visibility="visible";
        typeWriterMeat();
    }
    else if(event.target.id=="bev"){
        const imgbev=document.getElementById("imgbev");
        imgbev.style.visibility="visible";
        typeWriterbev();
    }
    else if(event.target.id=="pack"){
        const imgpack=document.getElementById("imgpack");
        imgpack.style.visibility="visible";
        typeWriterpack();
    }
    else if(event.target.id=="baked"){
        const imgbaked=document.getElementById("imgbaked");
        imgbaked.style.visibility="visible";
        typeWriterbake();
    }
    else if(event.target.id=="fruit"){
        const imgfruit=document.getElementById("imgfruits");
        imgfruit.style.visibility="visible";
        typeWriterfruit();
    }
    else if(event.target.id=="vege"){
        const imgveg=document.getElementById("imgveggies");
        imgveg.style.visibility="visible";
        typeWritervege();
    }
    else if(event.target.id=="dairy"){
        const imgdairy=document.getElementById("imgdairy");
        imgdairy.style.visibility="visible";
        typeWriterdairy();
    }
   
}

function change(var1){
    const fruit=document.getElementById(var1);
    fruit.style.animation="fade1 3s forwards";
    fruit.style.textDecorationStyle="Strikethrough";
 }

 function checkCompletion(var1) {
    const fruit=document.getElementById(var1);
    fruit.style.animation="fade1 3s forwards";
    fruit.style.textDecorationStyle="Strikethrough";
    
        showPopup();
  }
  
  function showPopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'flex'; 
  }
  
  function redirectToSkills() {
    window.location.href = 'skills.html';
  }