<div dir="rtl">
ال webpack عبارة عن Module bundler يستخدم مع تطبيقات الـ Javascript الحديثة و javascript frameworks مثل React.Js, Angular, Vue.js

حيث كانت الطريقة الشائعة في استدعاء اكثر من ملف javascript ان نستدعيهم واحدا تلو الآخر داخل `<script>` ويجب أن نراعي ترتيب الملفات و نراعي عدم حدوث تعارض بين المتغيرات في كل الملفات

لهذا ظهر ال webpack حيث يقوم بانشاء ما يسمى ب dependency graph التي تتكون من modules عبارة عن ملفات javascript و css و ملفات الخطوط و الصور و يتم تجميعهم في ملف يسمى bundle.js حيث يتم استدعاؤه في ملف ال html

و لهذا فان ال webpack تحسن ال performance للموقع حيث تقلل عدد ال http requests
و منذ اصدار 4.0.0 فانه يمكن الاستغناء عن ال configuration file لل webpack و لكن نستخدمه اذا احتجنا إلى تخصيص configurations معينة لتناسب احتياجاتنا و عندها ننشئ ملف اسمه webpack.config.js

فبداية نحدد الـ entry point وهو مسار الملف الذي يعتمد عليه جميع الملفات الاخرى بطريقة مباشرة أو غير مباشرة و القيمة الافتراضية لهذا الملف هي `src/index.js/.`

ثم نحدد الـ output point و هو مسار الملف الذي يتم فيه تجميع كل الملفات و قيمته الافتراضية `dist/main.js/.`

</div>

```
const path = require(‘path’);
module.exports = {
	entry: ‘./path.js’,
	output: {
		path: path.resolve(__dirname, ‘dist’),
		filename: ‘output.js’
	}
}
```
<div dir="rtl">
ثالثا نقوم بتحديد ال loaders حيث تسمح بتحويل جميع الملفات إلى ملفات javascript و تسمح باستدعاء ملفات الصور و ملفات css في javascript ففي هذا المثال
</div>

```
module: {
	rules: [
		{test: /\.js$/, exclude: /node-modules/, use: {loader: “babel-loader”}},
		{test: /\.css$/, use: ‘css-loader’}
]
}
```
<div dir="rtl">

يقوم بتحويل أوامر ال es6 إلى es5 و يقوم بالسماح باستدعاء ملفات ال css داخل الـ javascript
حيث تحتوى ال rules على objects تتكون من:
1)	 test: يتكون من regular expression لتحديد نوع الملفات 
2)	exclude: يتكون من الملفات التي نريد استبعادها حتى إذا كانت تحقق ال test
3)	Use: يحتوى على نوع ال loader الذي نريد تطبيقه على هذه الملفات
</div>
