

const loadCategory = async () => {
    const  res = await fetch("https://openapi.programming-hero.com/api/videos/categories");
    const data = await res.json();
    const category = data.data;
    displayCategory(category,)
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
    const  res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`);
    const data = await res.json();
    const contentAll = data.data;
    displayContender(contentAll)
       
    const blogQuestions = document.getElementById('blogQuestions');
    blogQuestions.innerHTML = ""

}  




const displayContender = (contentAll) => {



    const contentContender = document.getElementById('main-contender')
    const oops = document.getElementById('Oops')
    oops.innerHTML = ""
    const oopsCard = document.createElement('div')
    oopsCard.innerHTML =`       
    <div class=" justify-center mt-10 ">
    <div class="flex justify-center">
        <img src="./Icon.png" alt="">
    </div>
    <p class="text-3xl text-center mt-5">Oops!! Sorry, There is no content here</p>
</div>
    `

    if(contentAll >= false ){
        oops.classList.remove('hidden');
  
    }
    else{

        oops.classList.add('hidden');
    }
 
    oops.appendChild(oopsCard)

    contentContender.innerHTML = ""
    contentAll.forEach(mainContent => {
    const contentCard = document.createElement('div')
    contentCard.innerHTML =`

    <div class="card w-65 h-80 bg-base-100 shadow-xl">
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


const clickBlog = () => {

    const contentContender = document.getElementById('main-contender')
    contentContender.innerHTML = ""

    const oops = document.getElementById('Oops')
    oops.classList.add('hidden');

    const blogQuestions = document.getElementById('blogQuestions');
    const blogCard = document.createElement('div');
    blogQuestions.innerHTML = ""
    blogCard.innerHTML =`

    <h3 class="text-1xl font-bold my-2">Discuss the scope of var, let, and const</h3>
    <p><span class="font-bold">Answer:</span> var declarations are globally scoped or function scoped while let and const are block scoped. var variables can be updated and re-declared within its scope; let variables can be updated but not re-declared; const variables can neither be updated nor re-declared.</p>
    <h3 class="text-1xl font-bold my-2">Tell us the use cases of null and undefined</h3>
    <p><span class="font-bold">Answer:</span> Undefined means the variable has been declared, but its value has not been assigned. Null means an empty value or a blank value. The typeof() operator returns undefined for an undefined variable. The typeof() operator returns the type as an object for a variable whose value is assigned as null.</p>
    <h3 class="text-1xl font-bold my-2">What do you mean by REST API?</h3>
    <p><span class="font-bold">Answer:</span> An API, or application programming interface, is a set of rules that define how applications or devices can connect to and communicate with each other. A REST API is an API that conforms to the design principles of the REST, or representational state transfer architectural style.</p>
    `
    blogQuestions.appendChild(blogCard)
   
}

