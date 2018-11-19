const $ = require('jquery')
const Category = require('./Category').Category
const html = require('fs').readFileSync('index.html').toString()

QUnit.test('simple test', (assert) => {
  assert.ok(1 === 1)
})

QUnit.test('add Cat test', function (assert) {
  const catModule = require('./Category')
  /*document.documentElement.innerHTML = html;
    const catName = "testCat";
    $("#catTitle").value = catName;
    document.getElementById("addCatBtn").click();
    const curCountOfCats = document.getElementsByClassName("category").length;
    const value = document.getElementById("CategoryDiv" + (curCountOfCats - 1)).firstElementChild.innerHTML;
    assert.ok(value === catName);*/
  const catBefore = catModule.getCats().length;
  const catName = 'testCat';
  const testCat = new Category(catBefore, catName);
  catModule.pushToCats(testCat);
  assert.ok(catModule.getCats().length - 1 == catBefore);
});

/*QUnit.test("remove Cat test", function (assert) {
    "use strict";
    const beforeCountOfCats = document.getElementsByClassName("category").length;
    document.getElementById("categoryDeleteButton" + (beforeCountOfCats - 1)).click();
    const afterCountOfCats = document.getElementsByClassName("category").length;
    assert.ok(beforeCountOfCats - 1 === afterCountOfCats);
});

QUnit.test("Add Category HTML Test", function( assert ) {
     var oldLength = document.getElementsByTagName("body")[0].innerHTML.length;
     addCat();
     var newLength = document.getElementsByTagName("body")[0].innerHTML.length;
     assert.ok( oldLength < newLength, "html added" );
});*/

// QUnit.test("Add item HTML Test", function( assert ) {
//     var oldLength = document.getElementsByTagName("body")[0].innerHTML.length;
//     var btn;
//     var randomInput = "hgtuighldvjdl";
//     for (var i = 0; i < 5; i++)
//     {
//         btn = document.getElementById("CatogoryAddButton" + i);
//         var inp = document.getElementById("CatogoryAddInput" + i);
//         if (inp && btn)
//         {
//             inp.value = randomInput;
//             btn.click();
//             break;
//         }
//     }
//     var newLength = document.getElementsByTagName("body")[0].innerHTML.length;
//     assert.ok( oldLength < newLength, "html added" );
//     assert.ok( document.getElementsByTagName("body")[0].innerHTML.indexOf(randomInput) != -1, "content present! (yay?)" );
// });

// QUnit.test("Delete Category HTML Test", function( assert ) {
//     var oldLength = document.getElementsByTagName("body")[0].innerHTML.length;
//     delCat(1);
//     var newLength = document.getElementsByTagName("body")[0].innerHTML.length;
//     assert.ok( oldLength > newLength, "html removed" );
// });