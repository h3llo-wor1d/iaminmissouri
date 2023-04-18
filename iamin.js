const URL = "https://ago.mo.gov/file-a-complaint/transgender-center-concerns?sf_cntrl_id=ctl00%24MainContent%24C001"
const axios = require('axios');

const makeBullshitRequest = async () => {
    /*
        How to use:
        Just make a bullshit request jackass.
        All of the shit is commented.
        Download axios.
        Have fun I guess.
        You may need a cookie. idk.
        You can probably get that by fetching the main page and looking for a set_cookie header.
    */
    await axios({
        method: "POST",
        url: URL,
        header: {
            'Accept': 'application/json',
            'Content-Type': 'multipart/form-data',
        },
        data: {
            TextFieldController_4: "shit", //firstname
            TextFieldController_5: "bullshit", //lastname
            TextFieldController_1: "virgin st", //streetname
            TextFieldController_2: "uhhh idk", //city
            DropdownListFieldController: "IA", //state
            TextFieldController_6: "123456", //zipcode
            TextFieldController_0: "test@example.com", //email
            TextFieldController_3: "1234567890", //phone number
            ParagraphTextFieldController: "I HAVE A COCK AND BALLS" // Complaint paragraph
        }
    })
}