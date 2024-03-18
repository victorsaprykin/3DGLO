const validator = () => {
    const form1 = document.querySelector("#form1");
    const mainName = form1.querySelector("#form1-name");
    const mainEmail = form1.querySelector("#form1-email");
    const mainPhone = form1.querySelector("#form1-phone");

    const form2 = document.querySelector("#form2");
    const topName = form2.querySelector("#form2-name");
    const topEmail = form2.querySelector("#form2-email");
    const topPhone = form2.querySelector("#form2-phone");

    const form3 = document.querySelector("#form3");
    const formName = form3.querySelector("#form3-name");
    const formEmail = form3.querySelector("#form3-email");
    const formPhone = form3.querySelector("#form3-phone");

    const formMessage = form2.querySelector('#form2-message')




    mainName.addEventListener("input", (e) => {
        e.target.value = e.target.value.replace(/[^а-я\s]/i, "");
    });
    mainEmail.addEventListener("input", (e) => {
        e.target.value = e.target.value.replace(/[^\w\@\-\_\.\!\~\*\']/, "");
    });
    mainPhone.addEventListener("input", (e) => {
        e.target.value = e.target.value.replace(/[^()\-0-9+]/, "");

    });
    topName.addEventListener("input", (e) => {
        e.target.value = e.target.value.replace(/[^а-я\s\-]/i, "");
    });
    topEmail.addEventListener("input", (e) => {
        e.target.value = e.target.value.replace(/[^\w\@\-\_\.\!\~\*\']/, "");
    });
    topPhone.addEventListener("input", (e) => {
        e.target.value = e.target.value.replace(/[^()\-0-9+]/i, "");
    });
    formName.addEventListener("input", (e) => {
        e.target.value = e.target.value.replace(/[^а-я\s\-]/i, "");
    });
    formEmail.addEventListener("input", (e) => {
        e.target.value = e.target.value.replace(/[^\w\@\-\_\.\!\~\*\']/, "");
    });
    formPhone.addEventListener("input", (e) => {
        e.target.value = e.target.value.replace(/[^()\-0-9+]/i, "");
    });
    formMessage.addEventListener("input", (e) => {
        e.target.value = e.target.value.replace(/[^а-я.,\/?!\;:<>\s-`"'()]/gi, "");
    });
}


export default validator;