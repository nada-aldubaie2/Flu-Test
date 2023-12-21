import React from "react";
import { useState, useEffect } from "react";
import { API_URL, route } from "../help/api";

export default function MainContent() {
  //===========Questions======
  const [questions, setQuestions] = useState([]);
  // const [questions, setQuestions] = useState([{},{}]); // array
  // const [questions, setQuestions] = useState({}); // object
  // const [questions, setQuestions] = useState("kjh"); // single value

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [diagnosed, setDiagnosed] = useState(false);
  const [diagnosed1, setDiagnosed1] = useState({ yes: 0, no: 0, stateu: -1 });
  const [yes, setYes] = useState(0);
  const [no, setNo] = useState(0);
  const [stateu, setStateu] = useState(-1);
  const [newQuestion, setNewQuestion] = useState('');
  const [syndrome, setSyndrome] = useState([]);
  const [newSyndrome, setNewSyndrome] = useState([]);

  const [stu, setStu] = useState({ name: "", age: 0 });

  const handleAnswer = (answer) => {
    setStu({ ...stu, age: stu.age + 1 });

    const updatedQuestions = [...questions];
    updatedQuestions[currentQuestion].answer = answer;
    setQuestions(updatedQuestions);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      answer == "نعم"
        ? setDiagnosed1({ ...diagnosed1, yes: diagnosed1.yes + 1 })
        : setDiagnosed1({ ...diagnosed1, no: diagnosed1.no + 1 });

      // op1
      // if(answer == "نعم") setYes(yes + 1)
      // else setNo(no + 1)
      // op2
      answer == "نعم" ? setYes(yes + 1) : setNo(no + 1);
    } else {
      setDiagnosed1({
        ...diagnosed1,
        stateu: diagnosed1.yes > diagnosed1.no ? 1 : 0,
      });
      // if(yes > no) setStateu(1)
      // else setStateu(0)
      yes > no ? setStateu(1) : setStateu(0);

      //setDiagnosed1({})
      //alert('in else')
      //diagnoseInfluenza();
    }
  };

  const diagnoseInfluenza = () => {
    const hasFever = questions[0].answer === "نعم" || "لا";
    const hasSevereCough = questions[1].answer === "نعم" || "لا";
    const hasFatigue = questions[2].answer === "نعم" || "لا";
    const hasShudder = questions[3].answer === "نعم" || "لا";
    const hasSweating = questions[4].answer === "نعم" || "لا";
    const hasShortnessOfBreath = questions[5].answer === "نعم" || "لا";
    const hasRunnyNose = questions[6].answer === "نعم" || "لا";
    const hasNasalCongestion = questions[7].answer === "نعم" || "لا";
    const hasEyePain = questions[8].answer === "نعم" || "لا";
    // Decision Tree Algorithm
    switch (true) {
      case hasFever &&
        hasSevereCough &&
        hasFatigue &&
        hasShudder &&
        hasSweating &&
        hasShortnessOfBreath &&
        hasRunnyNose &&
        hasNasalCongestion &&
        hasEyePain:
        setDiagnosed(true);
        break;
      case hasFever && hasSevereCough && hasFatigue && hasShudder:
        setDiagnosed(true);
        break;
      case (hasFever && hasSevereCough) ||
        (hasFatigue && hasShudder) ||
        (hasSweating && hasShortnessOfBreath && hasRunnyNose) ||
        (hasNasalCongestion && hasEyePain):
        setDiagnosed(true);
        break;
      case hasFever && hasSevereCough:
        setDiagnosed(true);
        break;
      case hasFever && hasFatigue:
        setDiagnosed(true);
        break;
      default:
        setDiagnosed(false);
    }
  };

  const handleNewQuestionSubmit = (e) => {
    e.preventDefault();
    const newQuestionObj = {
      id: questions.length + 1,
      syndrome: newQuestion,
      answer: null,
    };
    setQuestions([...questions, newQuestionObj]);
    setNewQuestion('');
    document.getElementById("form").style.display = "none";
  };

  //==========Advices==========
  const [quoteIndex, setQuoteIndex] = useState(0);

  const quotesArr = [
    ` <blockquote class="sidekick" dir="rtl" lang="ar">
          القيام بغسل اليدين بالماء الدافئ والصابون بشكل منتظم
          <br/>
          </blockquote>`,
    ` <blockquote class="sidekick" dir="rtl" lang="ar">
          تجنب لمس عينيك وأنفك وفمك
                <br/>
          </blockquote>`,
    ` <blockquote class="sidekick" dir="rtl" lang="ar">
          تقوية جهاز المناعة
            <br/>
          </blockquote>`,
    ` <blockquote class="sidekick" dir="rtl" lang="ar">
          رتداء الكمامة باستمرار خارج المنزل 
                <br/>
          </blockquote>`,
  ];

  const handleQuoteClick = () => {
    setQuoteIndex((prevIndex) => (prevIndex + 1) % quotesArr.length);
  };

  // useEffect(() => {
  //   document.getElementById('AdviceID').innerHTML = quotesArr[quoteIndex]
  // }, [quoteIndex])

  //==================================

  //============API===================

  useEffect(() => {
    refreshSyndrome();
  }, []);

  // async function refreshSyndrome() {
  //   await fetch(API_URL+"api/flutest/GetSyndrome").then(response=>response.json())
  //   .then(data=>{
  //     setState(data);
  //   });
  // }

  const refreshSyndrome = async () => {
    fetch(API_URL + route.flutest, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "your-api-key",
        "X-RapidAPI-Host": "jokes-by-api-ninjas.p.rapidapi.com",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setSyndrome(data);
        console.log(data);
        setQuestions(data);
      })
      .catch((error) => console.log(error));

    //setSyndrome(res.data);
  };

  // async refreshSyndrome(){
  //   fetch(API_URL+"api/flutest/GetSyndrome").then(response=>response.json())
  //   .then(data=>{
  //     setState(data);
  //   });
  // }

  // const addClick = async () => {
  //   fetch(API_URL + route.flupost, {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //   })
  //   .then((response) => response.json())
  //   .then((data) => {
  //     setNewSyndrome(data);
  //     console.log(data);
  //     setQuestions(data);
  //     newSyndrome = document.getElementById("newSyndrome").value;
  //    append("newSyndrome", newSyndrome);
  //     })
  //     .catch((error) => console.log(error));
  // };
  const addClick = async () => {
    try {
      // Prepare the data to be sent in the request body
      const newData = {
        syndrome: newSyndrome,
        // Add other relevant data as needed
      };
  
      // Make a POST request to the backend API
      const response = await fetch(API_URL + "flutest/AddSyndrome", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Add any other headers if needed
        },
        body: JSON.stringify(newData),
      })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error:', error));
      if (response.ok) {
  // If the request is successful, you may want to handle the response
  const result = await response.json();
  console.log("Server response:", result);
  setNewQuestion("");

  // If the request is successful, update the state or perform any other necessary actions
        // const data = await response.json();
        // setNewSyndrome(data);
        // setQuestions(data);
        // Additional actions or state updates if needed
      } else {
        // Handle errors if the request is not successful
        console.error("Failed to add a new syndrome:", response.status, response.statusText);
      }
    } catch (error) {
      // Handle any unexpected errors
      console.error("Error:", error);
    }
  };
  
  // async deleteClick(id){
  //   fetch(API_URL + "api/flutest/DeleteSyndrome?id="+id,{
  //     method:"Delete",
  //   }).then(res=>res.json())
  //   .then((result)=>{
  //     alert(result);
  //     refreshSyndrome();
  //   })
  // }
  const handleNewQuestionChange = (e) => {
    setNewQuestion(e.target.value);
  };
  //==================================
  return (
    <main>
      {JSON.stringify(stu)}
      {"yes = " + yes}
        {"no = " + no}
        {"stateu = " + stateu}
      <section
        id="test"
        dir="rtl"
        className="my-24 m-auto bg-slate-50 border shadow-lg shadow-teal-700/50 text-center w-11/12 mx-auto rounded-xl py-20 transition-all duration-300 hover:shadow-teal-500/50  "
      >
        {diagnosed + ""}
        <div className="container mx-auto p-4 text-center">
          <p className="text-xl md:text-4xl sm:text-2xl font-bold mb-4 text-teal-500">
            اختبار فحص إذا كنت مصاب بالإنفلونزا ؟
          </p>
          {diagnosed1.stateu == -1 && currentQuestion < questions.length ? (
            <div className="{currentQuestion} mt-10 text-xl md:text-3xl sm:text-2xl font-bold text-gray-700">
              <p className="mb-4 ">{questions[currentQuestion].syndrome}</p>
              <button
                className="mx-3  text-gray-200 mt-4 bg-rose-500 shadow-lg font-normal hover:shadow-rose-500/50 px-4 py-2 rounded"
                onClick={() => handleAnswer("نعم")}
              >
                نعم
              </button>
              <button
                className="mr-2 mt-4 bg-teal-500 shadow-lg hover:shadow-teal-500/50 px-4 py-2 rounded text-xl sm:text-2xl md:text-3xl"
                onClick={() => handleAnswer("لا")}
              >
                لا
              </button>
            </div>
          ) : (
            <>
              <p
                dir="rtl"
                className={`text-xl sm:text-2xl md:text-3xl ${
                  diagnosed1.stateu == 1 ? "text-red-500" : "text-teal-600"
                } font-bold py-6`}
              >
                {diagnosed1.stateu == 1
                  ? "أنت مصاب بالإنفلونزا !🤧"
                  : "أنت غير مصاب بالإنفلونزا.😌"}
              </p>
              {/* {stateu == 1 ? 
                  <p dir="rtl" className="text-xl sm:text-2xl md:text-3xl text-red-500 font-bold py-6">
                أنت مصاب بالإنفلونزا !🤧
              </p>
                 : 
                <p dir="rtl" className="text-xl sm:text-2xl md:text-3xl text-green-500 font-bold py-6">
              أنت غير مصاب بالإنفلونزا.😌
            </p>
                } */}
              {diagnosed && (
                <p className="text-base sm:text-lg md:text-xl mt-4 text-slate-500">
                  إذا كنت تشعر بأعراض خطيرة أو استمرت الأعراض لفترة طويلة،
                  يستحسن زيارة الطبيب.
                </p>
              )}
            </>
          )}
        </div>
      </section>
      <section className="my-24 m-auto bg-slate-50 border shadow-lg shadow-teal-700/50 text-center w-11/12 mx-auto rounded-xl py-20 transition-all duration-300 hover:shadow-teal-500/50  ">
        <div
          className="w-9/12 m-auto border-r-4 border-teal-600"
          id="quoteParent"
        >
          <p
            dir="rtl"
            className="pb-5 text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-teal-500"
          >
            نصائح للوقاية من الانفلونزا 🩺
          </p>
          <div className="text-xl sm:text-2xl  md:text-3xl  mb-3" id="AdviceID">
            <blockquote className=" sidekick my-4 mx-auto" dir="rtl" lang="ar">
              التقليل من التواصل مع الأشخاص المصابين بالإنفلونزا
              <br />
            </blockquote>
          </div>
          <button
            className="hover:opacity-90 rounded-md bg-teal-500 shadow-lg hover:shadow-teal-500/50 px-5 py-3 text-base sm:text-xl  md:text-2xl mt-10 font-medium"
            id="QuoteBtn"
            onClick={handleQuoteClick}
          >
            نصائح اكثر
          </button>
        </div>
      </section>
      <section className="my-24 m-auto bg-slate-50 border shadow-lg shadow-teal-700/50 text-center w-11/12 mx-auto rounded-xl py-11 transition-all duration-300 hover:shadow-teal-500/50 ">
        <div id="heartContainer">
          <p className="text-xl sm:text-2xl  md:text-3xl font-bold mb-4 text-teal-500">
            🤨هل هناك اعراض اخرى غير موجودة وتريد اضافتها ؟
          </p>
          <button
            className="rounded-md bg-teal-500 shadow-lg font-medium hover:shadow-teal-500/50 px-5 py-3 text-base sm:text-xl  md:text-2xl mt-10"
            id="randomHearts"
            onClick={() =>
              (document.getElementById("form").style.display = "block")
            }
            
          >
            إضافة
          </button>
          <form
        dir="rtl"
        id="form"
        style={{ display: "none" }}
        onSubmit={handleNewQuestionSubmit}
      >
        <h2 className="text-slate-600 text-sm sm:text-base my-8">
          اكتب هنا الاعراض التي تريد اضافتها ؟
        </h2>
        <input
          id="newSyndrome"
          className="text-slate-800 outline-1 outline-teal-300"
          type="text"
          placeholder="الشعور ب.... "
          value={newQuestion}
          onChange={handleNewQuestionChange} // Use the onChange handler to update the state
          />
          <br />
        <button
          className="rounded-md bg-teal-500 shadow-lg font-medium hover:shadow-teal-500/50 px-5 py-3 text-base sm:text-xl md:text-2xl mt-10"
          id="randomHearts"
          onClick={addClick}  // Attach the addClick function to the button click event
        >
          إضافة
        </button>
      </form>
        </div>
      </section>
    </main>
  );
}
