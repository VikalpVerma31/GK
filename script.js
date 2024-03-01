const questions = [
    {
        question:"किस वर्ष संथाल विद्रोह शुरू हुआ",
        answers: [
            { text: "1855", correct: true},
            { text: "1861", correct: false},
            { text: "1852", correct: false},
            { text: "1858", correct: false},
        ] 
    },

    {
        question:"संथाल विद्रोह के प्रमुख लक्षण थे",
        answers: [
            { text: "वनवासी", correct: false},
            { text: "ईसाइयों", correct: false},
            { text: "ब्रिटिश अधिकारी", correct: true},
            { text: "साहूकार", correct: false},
        ] 
    },

    {
        question:"झारखंड में विधानमंडल की कुल संख्या एकसदनीय है?",
        answers: [
            { text: "92", correct: false},
            { text: " 81", correct: true},
            { text: "85", correct: false},
            { text: "इनमें से कोई नहीं", correct: false},
        ] 
    },

    {
        question:"झारखंड में कुल कितने संसदीय निर्वाचन क्षेत्र हैं?",
        answers: [
            { text: "13", correct: false},
            { text: "23", correct: false},
            { text: "14           ", correct: true},
            { text: "इनमें से कोई नहीं", correct: false},
        ] 
    },

    {
        question:"झारखंड राज्य की आधिकारिक भाषा क्या है?",
        answers: [
            { text: "कुरुख", correct: false},
            { text: "हिंदी", correct: true},
            { text: "संथाली", correct: false},
            { text: "इनमें से कोई नहीं", correct: false},
        ] 
    },

    {
        question:"झारखण्ड की साक्षरता दर क्या है?",
        answers: [
            { text: "67.6%", correct: true},
            { text: "99.00", correct: false},
            { text: "59.20", correct: false},
            { text: "इनमें से कोई नहीं", correct: false},
        ] 
    },

    {
        question:"भारत में झारखंड क्षेत्र रैंक क्या है?",
        answers: [
            { text: "19वीं", correct: false},
            { text: "25वीं", correct: false},
            { text: "16वीं", correct: true},
            { text: "इनमें से कोई नहीं", correct: false},
        ] 
    },

    {
        question:"झारखंड की जनसंख्या में भारत की जनसंख्या रैंक क्या है?",
        answers: [
            { text: "16वीं", correct: true},
            { text: "26वीं", correct: false},
            { text: "पाँचवाँ", correct: false},
            { text: "इनमें से कोई नहीं", correct: false},
        ] 
    },

    {
        question:"झारखण्ड के वर्तमान राज्यपाल कौन है?",
        answers: [
            { text: "सीपी राधाकृष्णन", correct: true},
            { text: "कटीकल शंकरनारायणन", correct: false},
            { text: "सैयद अहमद", correct: false},
            { text: "द्रौपदी मुर्मू", correct: false},
        ] 
    },

    {
        question:"झारखण्ड के वर्तमान पुलिस महानिदेशक कौन हैं?",
        answers: [
            { text: "डी. के. पाण्डेय", correct: true},
            { text: "एल. एम. खौते", correct: false},
            { text: "ऋषि कुमार शुक्ल", correct: false},
            { text: " इनमें से कोई नहीं", correct: false},
        ] 
    },

    {
        question:"झारखंड राज्य का पशु कौन सा है?",
        answers: [
            { text: "हाथी", correct: true},
            { text: "गौर", correct: false},
            { text: "हिम तेंदुआ", correct: false},
            { text: "इनमें से कोई नहीं", correct: false},
        ] 
    },

    {
        question:"झारखंड राज्य वृक्ष कौन सा है?",
        answers: [
            { text: "साल", correct: true},
            { text: "नारियल", correct: false},
            { text: "आम", correct: false},
            { text: "पीपल", correct: false},
        ] 
    },

    {
        question:" झारखंड राज्य फूल कौन सा है?",
        answers: [
            { text: "पलाश", correct: true},
            { text: "अफ्रीकी गेंदा", correct: false},
            { text: "फॉक्सटेल ऑर्किड", correct: false},
            { text: "फॉक्सटेल ऑर्किड", correct: false},
        ] 
    },

    {
        question:"झारखंड राज्य पक्षी कौन सा है?",
        answers: [
            { text: "कोयल", correct: true},
            { text: " हिमालयन मोनाल", correct: false},
            { text: "श्रीमती ह्यूम का तीतर", correct: false},
            { text: "व्हाइट ब्रेस्टेड किंगफिशर", correct: false},
        ] 
    },

    {
        question:"तिलैया बांध किस नदी पर बनाया गया है?",
        answers: [
            { text: "दामोदर", correct: false},
            { text: "बराकर", correct: true},
            { text: "कुकुर्दोबा", correct: false},
            { text: "इनमें से कोई नहीं", correct: false},
        ] 
    },

    {
        question:"तेनुघाट बांध किस नदी पर बनाया गया है?",
        answers: [
            { text: "दामोदर", correct: true},
            { text: "तहले", correct: false},
            { text: "कुकुर्दोबा", correct: false},
            { text: "इनमें से कोई नहीं", correct: false},
        ] 
    },

    {
        question:"तोराई बांध कहाँ स्थित है?",
        answers: [
            { text: "गुमला", correct: false},
            { text: "खूंटी", correct: false},
            { text: "पाकुड़", correct: true},
            { text: "इनमें से कोई नहीं", correct: false},
        ] 
    },

    {
        question:"गेतलसूद बांध कहाँ स्थित है?",
        answers: [
            { text: "चतरा", correct: false},
            { text: "रांची", correct: true},
            { text: "हजारीबाग", correct: false},
            { text: "इनमें से कोई नहीं", correct: false},
        ] 
    },

    {
        question:"गेतलसूद बांध किस नदी पर बनाया गया है?",
        answers: [
            { text: "घाघरा", correct: false},
            { text: "सुबर्णरेखा", correct: true},
            { text: "हीरू", correct: false},
            { text: "इनमें से कोई नहीं", correct: false},
        ] 
    },

    {
        question:"गढ़ी बांध किस नदी पर बनाया गया है?",
        answers: [
            { text: "धनकाई नाला", correct: false},
            { text: "सुबर्णरेखा", correct: true},
            { text: "चिंदा", correct: false},
            { text: "इनमें से कोई नहीं", correct: false},
        ] 
    },

    {
        question:"झारखंड में वन्यजीव अभयारण्य की कुल संख्या",
        answers: [
            { text: "3", correct: true},
            { text: "5", correct: false},
            { text: "9", correct: false},
            { text: "इनमें से कोई नहीं", correct: false},
        ] 
    },

    {
        question:"दलमा वन्यजीव अभयारण्य कहाँ स्थित है?",
        answers: [
            { text: "जमशेदपुर", correct: true},
            { text: "हजारीबाग", correct: false},
            { text: "रांची", correct: false},
            { text: "इनमें से कोई नहीं", correct: false},
        ] 
    },

    {
        question:"बेतला राष्ट्रीय उद्यान कहाँ स्थित है?",
        answers: [
            { text: "केरल", correct: false},
            { text: "झारखंड", correct: true},
            { text: "उत्तराखंड", correct: false},
            { text: "इनमें से कोई नहीं", correct: false},
        ] 
    },

    {
        question:"बेतला राष्ट्रीय उद्यान किसके लिए आरक्षित है?",
        answers: [
            { text: "हिरण", correct: false},
            { text: "शेर", correct: true},
            { text: "पक्षी और जलीय जानवर", correct: false},
            { text: "इनमें से कोई नहीं", correct: false},
        ] 
    },

    {
        question:"झारखंड राज्य कब बना?",
        answers: [
            { text: "2000", correct: true},
            { text: "1955", correct: false},
            { text: "1978", correct: false},
            { text: "1975", correct: false},
        ] 
    },

    {
        question:"झारखंड के पहले मुख्यमंत्री कौन थे",
        answers: [
            { text: "शिबू सोरेन", correct: false},
            { text: "अर्जुन मुंडा", correct: false},
            { text: "बाबूलाल मरांडी", correct: true},
            { text: "इनमें से कोई नहीं", correct: false},
        ] 
    },

    {
        question:"झारखंड के तीसरे मुख्यमंत्री कौन थे",
        answers: [
            { text: "शिबू सोरेन", correct: true},
            { text: "मधु कोड़ा", correct: false},
            { text: "अर्जुन मुंडा", correct: false},
            { text: "इनमें से कोई नहीं", correct: false},
        ] 
    },

    {
        question:"झारखंड के पहले राज्यपाल कौन थे",
        answers: [
            { text: "सैयद अहमद", correct: false},
            { text: "श्री प्रभात कुमार", correct: true},
            { text: "द मारवाह", correct: false},
            { text: "इनमें से कोई नहीं", correct: false},
        ] 
    },

    {
        question:"झारखंड के तीसरे राज्यपाल कौन थे",
        answers: [
            { text: "एम. रामा जोइस", correct: true},
            { text: "सैयद सिब्ते रज़ी", correct: false},
            { text: "वी. सी. पांडे", correct: false},
            { text: "इनमें से कोई नहीं", correct: false},
        ] 
    },

    {
        question:"कास्टेल ओवर ग्रेव्स के लेखक कौन हैं?",
        answers: [
            { text: "शैलेंद्र महंतो", correct: false},
            { text: "शिब्बू सोरेन", correct: false},
            { text: "विक्टर दास", correct: true},
            { text: "इनमें से कोई नहीं", correct: false},
        ] 
    },

    {
        question:"झारखण्ड में प्रसिद्ध टिस्को कारखाना किसने शुरू किया?",
        answers: [
            { text: "धीरूभाई अंबानी", correct: false},
            { text: "डॉ. राजेंद्र प्रसाद", correct: false},
            { text: "जमशेदजी टाटा", correct: true},
            { text: "इनमें से कोई नहीं", correct: false},
        ] 
    },

    {
        question:"शिव का प्रसिद्ध गुप्तेश्वर मंदिर कहाँ स्थित है?",
        answers: [
            { text: "खड़गपुर पर्वतमाला", correct: false},
            { text: "जेथियन पर्वतमाला", correct: false},
            { text: "कैमूर पर्वतमाला", correct: true},
            { text: "इनमें से कोई नहीं", correct: false},
        ] 
    },

    {
        question:"'मरार-गोमेका' के नाम से प्रसिद्ध कौन है",
        answers: [
            { text: "जयपाल सिंह", correct: true},
            { text: "बुद्ध भगत", correct: false},
            { text: "राज कुमार शुक्ल", correct: false},
            { text: "इनमें से कोई नहीं", correct: false},
        ] 
    },

    {
        question:"निम्नलिखित में से कौन सा खनिज झारखंड में उत्पादित नहीं होता है",
        answers: [
            { text: "थोरियम", correct: false},
            { text: "यूरेनियम", correct: false},
            { text: "पेट्रोलियम", correct: true},
            { text: "इनमें से कोई नहीं", correct: false},
        ] 
    },

    {
        question:"झारखंड में लौह इस्पात का उत्पादन कब हुआ?",
        answers: [
            { text: "1971", correct: false},
            { text: "1913", correct: true},
            { text: "1970", correct: false},
            { text: "1972", correct: false},
        ] 
    },

    {
        question:"सूर्य मंदिर....... में है",
        answers: [
            { text: "हजारीबाग", correct: false},
            { text: "बुंडू", correct: true},
            { text: "धनबाद", correct: false},
            { text: "इनमें से कोई नहीं", correct: false},
        ] 
    },

    {
        question:"झारखंड का कितना प्रतिशत हिस्सा खेती के लिए योग्य है?",
        answers: [
            { text: "77%", correct: true},
            { text: "45%", correct: false},
            { text: "86%", correct: false},
            { text: "95%", correct: false},
        ] 
    },

    {
        question:"कृषि की दृष्टि से झारखंड के सर्वाधिक विकसित क्षेत्र कौन-कौन से हैं",
        answers: [
            { text: "उत्तर-पूर्वी सीमांत कृषि क्षेत्र", correct: true},
            { text: "हजारीबाग पठार का कृषि क्षेत्र", correct: false},
            { text: "रांची का पठार कृषि क्षेत्र", correct: false},
            { text: "इनमें से कोई नहीं", correct: false},
        ] 
    },

    {
        question:"2011 की जनगणना के अनुसार झारखंड की जनसंख्या कितनी थी?",
        answers: [
            { text: "32,988,134", correct: true},
            { text: "32,905,134", correct: false},
            { text: "81,557,391", correct: false},
            { text: "95,549,559", correct: false},
        ] 
    },

    {
        question:"झारखंड का क्षेत्रफल कितना है?",
        answers: [
            { text: "9562,451 वर्ग मील", correct: false},
            { text: "8529,570 वर्ग मील", correct: false},
            { text: "30,778 वर्ग मील", correct: true},
            { text: "नमें से कोई नहीं", correct: false},
        ] 
    },

    {
        question:"झारखण्ड के उत्तर में कौन सा राज्य है?",
        answers: [
            { text: "उत्तर प्रदेश", correct: false},
            { text: "बिहार", correct: true},
            { text: "केरल", correct: false},
            { text: "इनमें से कोई नहीं", correct: false},
        ] 
    },

    {
        question:"झारखण्ड के पूर्व में कौन सा राज्य है?",
        answers: [
            { text: "पश्चिम बंगाल", correct: true},
            { text: "ऊपर", correct: false},
            { text: "पंजाब", correct: false},
            { text: "बिहार", correct: false},
        ] 
    },

    {
        question:"झारखण्ड की उप-राजधानी क्या है?",
        answers: [
            { text: "धनबाद", correct: false},
            { text: "दुमका", correct: true},
            { text: "रांची", correct: false},
            { text: "बोकारो", correct: false},
        ] 
    },

    {
        question:"स्वर्णरेखा नदी की कुल लंबाई कितनी है ?",
        answers: [
            { text: "395 किमी", correct: true},
            { text: "495 किमी.", correct: false},
            { text: "295 किमी.", correct: false},
            { text: "550 किमी.", correct: false},
        ] 
    },

    {
        question:"स्वर्णरेखा नदी का उद्गम स्थान क्या है?",
        answers: [
            { text: "पिस्का", correct: true},
            { text: "अमरकंटक", correct: false},
            { text: "चंदवा", correct: false},
            { text: "पद्मा", correct: false},
        ] 
    },

    {
        question:"नगड़ी गाँव स्वर्णरेखा एवं _________नदियों के उत्पत्ति के लिए प्रसिद्ध है।",
        answers: [
            { text: "उत्तरी कोयल", correct: false},
            { text: "दक्षिणी कोयल", correct: true},
            { text: "चानन", correct: false},
            { text: "यह सभी", correct: false},
        ] 
    },

    {
        question:"अमानत नदी किसमें गिरती है?",
        answers: [
            { text: "उत्तरी कोयल नदी में", correct: true},
            { text: "सोन नदी में", correct: false},
            { text: "मयूराक्षी नदी में", correct: false},
            { text: "स्वर्णरेखा नदी में", correct: false},
        ] 
    },

    {
        question:"अमानत नदी निकलती है :",
        answers: [
            { text: "तिरकुट पहाड़ी से", correct: false},
            { text: "पारसनाथ पहाड़ी से", correct: false},
            { text: "सिमलीपाल से", correct: false},
            { text: "हजारीबाग पठार से", correct: true},
        ] 
    },

    {
        question:"खरकई नदी......... में गिरती है।",
        answers: [
            { text: "सोन नदी", correct: false},
            { text: "स्वर्ण रेखा नदी", correct: true},
            { text: "मयूराक्षी नदी", correct: false},
            { text: "उत्तरी कोयल नदी", correct: false},
        ] 
    },

    {
        question:"खरकई नदी........... से निकलती है?",
        answers: [
            { text: "पारसनाथ पहाड़ी", correct: false},
            { text: "त्रिकूट पहाड़ी", correct: false},
            { text: "सिमलीपाल", correct: true},
            { text: "झरिया", correct: false},
        ] 
    },





];


const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer)
    });
} 

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct ==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "start quiz again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz(); 