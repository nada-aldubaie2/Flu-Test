import React from 'react'
import { useState, useEffect } from 'react'

// export default function MainContent() {
//   const [quoteIndex, setQuoteIndex] = useState(0)

//   const quotesArr = [
//     ` <blockquote class="sidekick" dir="rtl" lang="ar">
//     القيام بغسل اليدين بالماء الدافئ والصابون بشكل منتظم
//     <br/>
//     </blockquote>`,
//     ` <blockquote class="sidekick" dir="rtl" lang="ar">
//     تجنب لمس عينيك وأنفك وفمك
//           <br/>
//     </blockquote>`,
//     ` <blockquote class="sidekick" dir="rtl" lang="ar">
//     تقوية جهاز المناعة
//       <br/>
//     </blockquote>`,
//     ` <blockquote class="sidekick" dir="rtl" lang="ar">
//     رتداء الكمامة باستمرار خارج المنزل
//           <br/>
//     </blockquote>`,
//   ]

//   const handleQuoteClick = () => {
//     setQuoteIndex((prevIndex) => (prevIndex + 1) % quotesArr.length)
//   }
//   useEffect(() => {
//     document.getElementById('AdviceID').innerHTML = quotesArr[quoteIndex]
//   }, [quoteIndex])

//   //===========================================
//   const [addQuestion, setAddQuestion] = useState([
//     {
//     id:null ,
//     text: '',
//     answer: null,
//   },
// ,])
//   const [questions, setQuestions] = useState([
//     {
//       id: 1,
//       text: 'هل لديك حمى؟',
//       answer: null,
//     },
//     {
//       id: 2,
//       text: 'هل تعاني من سعال جاف مستمر',
//       answer: null,
//     },
//     {
//       id: 3,
//       text: 'هل تشعر بتعب؟',
//       answer: null,
//     },
//     {
//       id: 4,
//       text: 'هل لديك قشعريرة؟',
//       answer: null,
//     },
//     {
//       id: 5,
//       text: 'هل تعاني من التعرق؟',
//       answer: null,
//     },
//     {
//       id: 6,
//       text: 'هل تشعر بضيق تنفس ؟',
//       answer: null,
//     },
//     {
//       id: 7,
//       text: 'هل لديك رشح في الأنف؟',
//       answer: null,
//     },
//     {
//       id: 8,
//       text: 'هل تعاني من احتقان الأنف ؟',
//       answer: null,
//     },
//     {
//       id: 9,
//       text: 'هل تشعر ألم العين ؟',
//       answer: null,
//     },
//   ])

//   const [currentQuestion, setCurrentQuestion] = useState(0)

//   const [diagnosed, setDiagnosed] = useState(false)

//   const handleAnswer = (answer) => {
//     const updatedQuestions = [...questions]
//     updatedQuestions[currentQuestion].answer = answer
//     setQuestions(updatedQuestions)

//     if (currentQuestion < questions.length - 1) {
//       setCurrentQuestion(currentQuestion + 1)
//     } else {
//       diagnoseInfluenza()
//     }
//   }

//   const diagnoseInfluenza = () => {
//     const hasFever = questions[0].answer === 'نعم'
//     const hasSevereCough = questions[1].answer === 'نعم'
//     const hasFatigue = questions[2].answer === 'نعم'
//     const hasShudder = questions[3].answer === 'نعم'
//     const hasSweating = questions[4].answer === 'نعم'
//     const hasShortnessOfBreath = questions[5].answer === 'نعم'
//     const hasRunnyNose = questions[6].answer === 'نعم'
//     const hasNasalCongestion = questions[7].answer === 'نعم'
//     const hasEyePain = questions[8].answer === 'نعم'
//     // const {
//     //   hasFever,
//     //   hasSevereCough,
//     //   hasFatigue,
//     //   hasShudder,
//     //   hasSweating,
//     //   hasShortnessOfBreath,
//     //   hasRunnyNose,
//     //   hasNasalCongestion,
//     //   hasEyePain,
//     // } = questions[0].answer
//     // Decision Tree Algorithm
//     switch (true) {
//       case hasFever &&
//         hasSevereCough &&
//         hasFatigue &&
//         hasShudder &&
//         hasSweating &&
//         hasShortnessOfBreath &&
//         hasRunnyNose &&
//         hasNasalCongestion &&
//         hasEyePain:
//         setDiagnosed(true)
//         break
//       case hasFever && hasSevereCough && hasFatigue && hasShudder:
//         setDiagnosed(true)
//         break
//       case (hasFever && hasSevereCough) ||
//         (hasFatigue && hasShudder) ||
//         (hasSweating && hasShortnessOfBreath && hasRunnyNose) ||
//         (hasNasalCongestion && hasEyePain):
//         setDiagnosed(true)
//         break
//       case hasFever && hasSevereCough:
//         setDiagnosed(true)
//         break
//       case hasFever && hasFatigue:
//         setDiagnosed(true)
//         break
//       case hasFever:
//         setDiagnosed(false)
//       default:
//         setDiagnosed(false)
//         break
//     }
//   }
//   useEffect(()=>{
//    document.getElementById.('form').addEventListener("submit", (eo) => {
//       eo.preventDefault();
//       const addSyndromes = `

//       {!diagnosed && currentQuestion < questions.length ? (
//         <div className="{currentQuestion} mt-10 text-xl md:text-3xl sm:text-2xl font-bold text-gray-700">
//           <p className="mb-4 ">{addQuestion[currentQuestion].text}</p>
//           <button
//             className="mr-2 mt-4 bg-teal-500 shadow-lg hover:shadow-teal-500/50 px-4 py-2 rounded text-xl sm:text-2xl md:text-3xl"
//             onClick={() => handleAnswer('لا')}
//           >
//             لا
//           </button>
//           <button
//             className="mx-3  text-gray-200 mt-4 bg-rose-500 shadow-lg font-normal hover:shadow-rose-500/50 px-4 py-2 rounded"
//             onClick={() => handleAnswer('نعم')}
//           >
//             نعم
//           </button>
//         </div>
//       ) : (
//         <>
//           {diagnosed ? (
//             <p
//               dir="rtl"
//               className="text-xl sm:text-2xl md:text-3xl text-red-500 font-bold py-6"
//             >
//               أنت مصاب بالإنفلونزا !🤧 هيا اجزع اشرب زنجبيل 😂{' '}
//             </p>
//           ) : (
//             <p
//               dir="rtl"
//               className="text-xl sm:text-2xl md:text-3xl font-bold"
//             >
//               أنت غير مصاب بالإنفلونزا.😌
//             </p>
//           )}
//           {diagnosed && (
//             <p className="text-base  sm:text-lg  md:text-xl mt-4 text-slate-500">
//               إذا كنت تشعر بأعراض خطيرة أو استمرت الأعراض لفترة طويلة،
//               يستحسن زيارة الطبيب.
//             </p>
//           )}
//         </>
//       )}`;

//     test.innerHTML += addSyndromes;

//       input.value = "";
//     });
//   },[])

//   return (
//     <main>
//       <section id='test' className="my-24 m-auto bg-slate-50 border shadow-lg shadow-teal-700/50 text-center w-11/12 mx-auto rounded-xl py-20 transition-all duration-300 hover:shadow-teal-500/50  ">
//         <div className="container mx-auto p-4 text-center">
//           <p className="text-xl md:text-4xl sm:text-2xl font-bold mb-4 text-teal-500">
//             اختبار فحص إذا كنت مصاب بالإنفلونزا ؟
//           </p>
//           {!diagnosed && currentQuestion < questions.length ? (
//             <div className="{currentQuestion} mt-10 text-xl md:text-3xl sm:text-2xl font-bold text-gray-700">
//               <p className="mb-4 ">{questions[currentQuestion].text}</p>
//               const test = document.getElementById.("test");
//               <button
//                 className="mr-2 mt-4 bg-teal-500 shadow-lg hover:shadow-teal-500/50 px-4 py-2 rounded text-xl sm:text-2xl md:text-3xl"
//                 onClick={() => handleAnswer('لا')}
//               >
//                 لا
//               </button>
//               <button
//                 className="mx-3  text-gray-200 mt-4 bg-rose-500 shadow-lg font-normal hover:shadow-rose-500/50 px-4 py-2 rounded"
//                 onClick={() => handleAnswer('نعم')}
//               >
//                 نعم
//               </button>
//             </div>
//           ) : (
//             <>
//               {diagnosed ? (
//                 <p
//                   dir="rtl"
//                   className="text-xl sm:text-2xl md:text-3xl text-red-500 font-bold py-6"
//                 >
//                   أنت مصاب بالإنفلونزا !🤧 هيا اجزع اشرب زنجبيل 😂{' '}
//                 </p>
//               ) : (
//                 <p
//                   dir="rtl"
//                   className="text-xl sm:text-2xl md:text-3xl font-bold"
//                 >
//                   أنت غير مصاب بالإنفلونزا.😌
//                 </p>
//               )}
//               {diagnosed && (
//                 <p className="text-base  sm:text-lg  md:text-xl mt-4 text-slate-500">
//                   إذا كنت تشعر بأعراض خطيرة أو استمرت الأعراض لفترة طويلة،
//                   يستحسن زيارة الطبيب.
//                 </p>
//               )}
//             </>
//           )}
//         </div>
//       </section>
//       <section className="my-24 m-auto bg-slate-50 border shadow-lg shadow-teal-700/50 text-center w-11/12 mx-auto rounded-xl py-20 transition-all duration-300 hover:shadow-teal-500/50  ">
//         <div
//           className="w-9/12 m-auto border-r-4 border-teal-600"
//           id="quoteParent"
//         >
//           <p
//             dir="rtl"
//             className="pb-5 text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-teal-500"
//           >
//             نصائح للوقاية من الانفلونزا 🩺
//           </p>
//           <div className="text-xl sm:text-2xl  md:text-3xl  mb-3" id="AdviceID">
//             <blockquote className=" sidekick my-4 mx-auto" dir="rtl" lang="ar">
//               التقليل من التواصل مع الأشخاص المصابين بالإنفلونزا
//               <br />
//             </blockquote>
//           </div>
//           <button
//             className="hover:opacity-90 rounded-md bg-teal-500 shadow-lg hover:shadow-teal-500/50 px-5 py-3 text-base sm:text-xl  md:text-2xl mt-10 font-medium"
//             id="QuoteBtn"
//             onClick={handleQuoteClick}
//           >
//             نصائح اكثر
//           </button>
//         </div>
//       </section>
//       <section className="my-24 m-auto bg-slate-50 border shadow-lg shadow-teal-700/50 text-center w-11/12 mx-auto rounded-xl py-11 transition-all duration-300 hover:shadow-teal-500/50 ">
//         <div id="heartContainer">
//           <p className="text-xl sm:text-2xl  md:text-3xl font-bold mb-4 text-teal-500">
//             🤨هل هناك اعراض اخرى غير موجودة وتريد اضافتها ؟
//           </p>
//           <button
//             className="rounded-md bg-teal-500 shadow-lg font-medium hover:shadow-teal-500/50 px-5 py-3 text-base sm:text-xl  md:text-2xl mt-10"
//             id="randomHearts"
//           >
//             إضافة
//           </button>
//           <h2 lang="ar">هاا ايه تانى ؟</h2>
//           <form id='form'>
//             <input lang="ar" type="text" placeholder="هتعمل ايه يا معلم ؟" />
//             {addQuestion.text}
//             <button class="icon-upload"> </button>
//           </form>
//         </div>
//       </section>

//     </main>
//   )
// }

export default function MainContent() {

//===========Questions======
  const [questions, setQuestions] = useState([
    {
      id: 1,
      text: 'هل لديك حمى؟',
      answer: null,
    },
    {
      id: 2,
      text: 'هل تعاني من سعال جاف مستمر',
      answer: null,
    },
    {
      id: 3,
      text: 'هل تشعر بتعب؟',
      answer: null,
    },
    {
      id: 4,
      text: 'هل لديك قشعريرة؟',
      answer: null,
    },
    {
      id: 5,
      text: 'هل تعاني من التعرق؟',
      answer: null,
    },
    {
      id: 6,
      text: 'هل تشعر بضيق تنفس ؟',
      answer: null,
    },
    {
      id: 7,
      text: 'هل لديك رشح في الأنف؟',
      answer: null,
    },
    {
      id: 8,
      text: 'هل تعاني من احتقان الأنف ؟',
      answer: null,
    },
    {
      id: 9,
      text: 'هل تشعر ألم العين ؟',
      answer: null,
    },
  ])
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [diagnosed, setDiagnosed] = useState(false)
  const [newQuestion, setNewQuestion] = useState('')

  const handleAnswer = (answer) => {
    const updatedQuestions = [...questions]
    updatedQuestions[currentQuestion].answer = answer
    setQuestions(updatedQuestions)

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      diagnoseInfluenza()
    }
  }

  const diagnoseInfluenza = () => {
    const hasFever = questions[0].answer === 'نعم'||'لا'
    const hasSevereCough = questions[1].answer === 'نعم'||'لا'
    const hasFatigue = questions[2].answer === 'نعم'||'لا'
    const hasShudder = questions[3].answer === 'نعم'||'لا'
    const hasSweating = questions[4].answer === 'نعم'||'لا'
    const hasShortnessOfBreath = questions[5].answer === 'نعم'||'لا'
    const hasRunnyNose = questions[6].answer === 'نعم'||'لا'
    const hasNasalCongestion = questions[7].answer === 'نعم'||'لا'
    const hasEyePain = questions[8].answer === 'نعم'||'لا'
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
        setDiagnosed(true)
        break
      case hasFever && hasSevereCough && hasFatigue && hasShudder:
        setDiagnosed(true)
        break
      case (hasFever && hasSevereCough) ||
        (hasFatigue && hasShudder) ||
        (hasSweating && hasShortnessOfBreath && hasRunnyNose) ||
        (hasNasalCongestion && hasEyePain):
        setDiagnosed(true)
        break
      case hasFever && hasSevereCough:
        setDiagnosed(true)
        break
      case hasFever && hasFatigue:
        setDiagnosed(true)
        break
      default:
        setDiagnosed(false)
        
    }
  }
  
    const handleNewQuestionSubmit = (e) => {
      e.preventDefault()
      const newQuestionObj = {
        id: questions.length + 1,
        text: newQuestion,
        answer: null,
      }
      setQuestions([...questions, newQuestionObj])
      setNewQuestion('')
      document.getElementById('form').style.display = 'none'
    }

//==========Advices==========
    const [quoteIndex, setQuoteIndex] = useState(0)

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
    ]

  const handleQuoteClick = () => {
    setQuoteIndex((prevIndex) => (prevIndex + 1) % quotesArr.length)
  }

  useEffect(() => {
    document.getElementById('AdviceID').innerHTML = quotesArr[quoteIndex]
  }, [quoteIndex])

//==================================

  return (
    <main>
      <section
        id="test"
        dir='rtl'
        className="my-24 m-auto bg-slate-50 border shadow-lg shadow-teal-700/50 text-center w-11/12 mx-auto rounded-xl py-20 transition-all duration-300 hover:shadow-teal-500/50  "
      >
        <div className="container mx-auto p-4 text-center">
          <p className="text-xl md:text-4xl sm:text-2xl font-bold mb-4 text-teal-500">
            اختبار فحص إذا كنت مصاب بالإنفلونزا ؟
          </p>
          {!diagnosed && currentQuestion < questions.length ? (
            <div className="{currentQuestion} mt-10 text-xl md:text-3xl sm:text-2xl font-bold text-gray-700">
              <p className="mb-4 ">{questions[currentQuestion].text}</p>
              <button
                className="mx-3  text-gray-200 mt-4 bg-rose-500 shadow-lg font-normal hover:shadow-rose-500/50 px-4 py-2 rounded"
                onClick={() => handleAnswer('نعم')}
              >
                نعم
              </button>
              <button
                className="mr-2 mt-4 bg-teal-500 shadow-lg hover:shadow-teal-500/50 px-4 py-2 rounded text-xl sm:text-2xl md:text-3xl"
                onClick={() => handleAnswer('لا')}
              >
                لا
              </button>
            </div>
          ) : (
            <>
              {diagnosed ? (
                <p
                  dir="rtl"
                  className="text-xl sm:text-2xl md:text-3xl text-red-500 font-bold py-6"
                >
                  أنت مصاب بالإنفلونزا !🤧 
                </p>
              ) : (
                <p
                  dir="rtl"
                  className="text-xl sm:text-2xl md:text-3xl font-bold py-6"
                >
                  أنت غير مصاب بالإنفلونزا.😌
                </p>
              )}
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
              (document.getElementById('form').style.display = 'block')
            }
          >
            إضافة
          </button>
          <form
          dir="rtl"
            id="form"
            style={{ display: 'none' }}
            onSubmit={handleNewQuestionSubmit}
          >
          <h2  className='text-slate-600 text-sm sm:text-base my-8 '>اكتب هنا الاعراض التي تريد اضافتها ؟</h2>
            <input
            className='text-slate-800 outline-1 outline-teal-300'
              type="text"
              placeholder="الشعور ب.... "
              value={newQuestion}
              onChange={(e) => setNewQuestion(e.target.value)}
            />
            <button className="icon-upload text-red-900"></button>
          </form>
        </div>
      </section>
    </main>
  )
}
