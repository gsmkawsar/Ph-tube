const loadCategory = async () => {
    const  res = await fetch("https://openapi.programming-hero.com/api/videos/categories");
    const data = await res.json();
    const category = data.data;
    displayCategory(category)
}  

const displayCategory = (category) => {
    const categoryContender = document.getElementById('category-contender');
    category.forEach(menu => {
    // console.log(menu)
    const categoryCard = document.createElement('div')
    categoryCard.innerHTML =`
    <input onclick="clickCategory('${menu.category_id}')" class="join-item btn mx-2" type="radio" name="options" aria-label="${menu.category}" />
    `
    categoryContender.appendChild(categoryCard)

    
});

}



const clickCategory = async (categoryId = ('1000')) => {
    console.log(categoryId)
    const  res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`);
    const data = await res.json();
    const contentAll = data.data;
    displayContender(contentAll)
}  

const displayContender = (contentAll) => {


    const contentContender = document.getElementById('main-contender')
    contentContender.innerHTML = ""
    contentAll.forEach(mainContent => {
    const contentCard = document.createElement('div')
    contentCard.innerHTML =`

    <div class="card w-80 h-80 bg-base-100 shadow-xl">
    <figure><img class=" h-56 " src="${mainContent?.thumbnail}" alt="Shoes" /></figure>
    <div class="card-body">
    <div class="flex">
    <img class="w-9 h-9 rounded-full" src="${mainContent?.authors[0]?.profile_picture}" alt="">
    <div class="ml-3">
        <h2 class="card-title">
            ${mainContent?.title}
        </h2>
    </div>
  </div>
      <div class="flex">
        <div class="mr-3">
            <p> ${mainContent?.authors[0]?.profile_name}</p>
        </div>
        <img src="./verified.svg" alt="">
      </div>
      <div class=" justify-start">
        <p>  ${mainContent?.others?.views} <span>views</span></p>
      </div>
    </div>
  </div> 
        `
    contentContender.appendChild(contentCard)

    })

}


clickCategory()

loadCategory()