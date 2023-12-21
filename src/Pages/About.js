import { Helmet } from 'react-helmet-async'
import Header from '../Component/Header'
import MainContent from '../Component/MainContent'
import Footer from '../Component/Footer'

const About = () => {
  return (
    <div className="grid  grid-rows-[20vh_minmax(900px,_1fr)_10vh] grid-cols-1 min-h-screen ">
      {/* <Helmet>
        <title>About</title>
      </Helmet> */}
      <Header className="" />

      <main>
        <section
          dir="rtl"
          className="my-24 m-auto  bg-slate-50 border shadow-lg shadow-teal-700/50 w-11/12 mx-auto rounded-xl py-11 transition-all duration-300 hover:shadow-teal-500/50 "
        >
          <div id="heartContainer">
            <h2 className="text-xl sm:text-2xl  md:text-3xl font-bold mb-4 text-teal-500 text-center">
              ما هي الانفلونزا
            </h2>
            <p className="text-sm sm:text-lg  md:text-xl  mb-4 text-slate-800 px-6 leading-10 pt-3">
              الإنفلونزا هي عدوى فيروسية تصيب الجهاز التنفسي. يُعتبر الفيروسان A
              وB هما الأنواع الرئيسية لفيروس الإنفلونزا، وهما يتسببان في حدوث
              نزلات البرد والأنفلونزا. تتميز الإنفلونزا بأعراض مثل الحمى،
              والسعال، والسيلان الأنفي، وآلام الجسم، والإرهاق. تنتقل العدوى عادة
              عبر قطيرات الهواء التي تنتج عندما يسعل أو يعطس شخص مصاب، ويمكن أن
              تنتقل الفيروسات أيضًا عن طريق لمس الأسطح الملوثة. يُنصح باتباع
              إجراءات وقائية لتجنب الإصابة بالإنفلونزا، مثل غسل اليدين بانتظام،
              وتجنب الأشخاص المصابين، وارتداء الكمامة في حالة الإصابة أو التواجد
              في أماكن مكتظة. إذا كنت تعتقد أنك قد أصبت بالإنفلونزا، يُفضل
              استشارة الطبيب لتشخيص دقيق وتلقي الرعاية الطبية اللازمة.
            </p>
          </div>
        </section>
        <section
          dir="rtl"
          className="my-24 m-auto  bg-slate-50 border shadow-lg shadow-teal-700/50 w-11/12 mx-auto rounded-xl py-11 transition-all duration-300 hover:shadow-teal-500/50 "
        >
          <div id="heartContainer">
            <h2 className="text-xl sm:text-2xl  md:text-3xl font-bold mb-4 text-teal-500 text-center">
            اسباب الانفلونزا
            </h2>
            <p className="text-sm sm:text-lg  md:text-xl  mb-4 text-slate-800 px-6 leading-10 pt-1 ">
            الإنفلونزا هي ناتجة عن عدوى فيروسية تصيب الجهاز التنفسي. يسبب الفيروسان A وB للإنفلونزا، وهما ينتميان إلى عائلة Orthomyxoviridae. يمكن أن يحدث انتقال الفيروسات بسهولة من شخص إلى آخر عبر قطيرات الهواء التي تتكون عندما يسعل أو يعطس الشخص المصاب. كما يمكن أن تنتقل الفيروسات أيضًا من خلال لمس الأسطح الملوثة ومن ثم لمس الأنف أو الفم.

العوامل التي قد تزيد من احتمالية الإصابة بالإنفلونزا تشمل:
            </p>
            <p className="text-sm sm:text-lg  md:text-xl  mb-4 text-slate-800 px-6 leading-10 pt-1">

1. التواجد في أماكن مكتظة: البقاء في أماكن مكتظة مثل الأماكن العامة أو المدارس يمكن أن يزيد من فرص العدوى.
</p>

<p className="text-sm sm:text-lg  md:text-xl  mb-4 text-slate-800 px-6 leading-10 pt-1">

2. التواصل مع أشخاص مصابين: الاقتراب من أشخاص يعانون من الإنفلونزا يزيد من خطر الانتقال.
</p>

<p className="text-sm sm:text-lg  md:text-xl  mb-4 text-slate-800 px-6 leading-10 pt-1">

3. عدم اتباع النظافة الشخصية: عدم غسل اليدين بانتظام وعدم تجنب لمس الوجه باليدين قد يزيد من فرص العدوى.
</p>

<p className="text-sm sm:text-lg  md:text-xl  mb-4 text-slate-800 px-6 leading-10 pt-1">

4. التغيرات الموسمية: تكون الإنفلونزا شائعة خلال فصلي الشتاء والربيع، ولكن يمكن حدوث حالات على مدار السنة.
</p>

<p className="text-sm sm:text-lg  md:text-xl  mb-4 text-slate-800 px-6 leading-10 pt-1">

5. نقص في الجهاز المناعي: يكون الأفراد ذوي الجهاز المناعي ضعيف أكثر عرضة للإصابة.
</p>

<p className="text-sm sm:text-lg  md:text-xl  mb-4 text-slate-800 px-6 leading-10 pt-1">

تجنب العوامل المذكورة أعلاه واتباع الإجراءات الوقائية مثل التطعيم والنظافة الشخصية يمكن أن يقلل من احتمالية الإصابة بالإنفلونزا.






            </p>
          </div>
        </section>
        <section
          dir="rtl"
          className="my-24 m-auto  bg-slate-50 border shadow-lg shadow-teal-700/50  w-11/12 mx-auto rounded-xl py-11 transition-all duration-300 hover:shadow-teal-500/50 "
        >
          <div className='px-8'>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-teal-500 text-center">
            اعراض الانفلونزا

</h2>
            <ul dir='rtl' className="text-sm sm:text-lg  md:text-xl  mb-4 text-slate-800 px-8 leading-10 pt-3 list-decimal">
            الأعراض الشائعة للإنفلونزا تشمل:


            <li>الحمى: ارتفاع في درجة حرارة الجسم.

</li>
            <li>السعال: يمكن أن يكون السعال جافًا أو مصاحبًا للبلغم.

</li>
            <li>التعب والإرهاق: شعور بالإرهاق الشديد وفقدان القوة.

</li>
            <li>آلام العضلات والجسم: آلام في العضلات والجسم بشكل عام.

</li>
            <li>الصداع: الإصابة بصداع شديد.

</li>
            <li>احتقان الأنف وسيلانه: احتقان الأنف وسيلانه.

</li>
            <li>آلام الحلق: الشعور بآلام في الحلق.



</li>
            <li>قشعريرة: شعور بالبرودة أو القشعريرة.



</li>
            </ul>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}

export default About
