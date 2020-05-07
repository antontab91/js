window.addEventListener("error", function onUnhandledError(err) {
    console.error("error", err.message);
});

let userParsingResult = '{"name":"Tom"}';

try {
    const user = JSON.parse(userParsingResult);
    console.log("User data: ", user);
    userParsingResult = "success";
} catch (e) {
    userParsingResult = "error";
} finally {
    console.log(`User parsing finished with ${userParsingResult}`);
}

let productParsingResult = '{"name":"Tom"';

try {
    const product = JSON.parse(/* сломанный JSON c данными о продукте */);
    console.log("Product data: ", product);
    productParsingResult = "success";
} catch (e) {
    productParsingResult = "error";
} finally {
    console.log(`Product parsing finished with ${productParsingResult}`);
}