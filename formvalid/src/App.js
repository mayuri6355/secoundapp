import logo from './logo.svg';
import './App.css';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import parse from "date-fns/parse";


function App() {

  const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required(' First Name Required'),

    lastName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required(' Last Name Required'),

      address: Yup.string()
       .min(6,'Too Short')
       .max(50,'TO LONG')
      .required('Address Required'),


      // Phoneno: Yup.number()
      // .min(10,'Too Short')
      // .max(12,'TO LONG')
      // .required('Required PhoneNo'),

      Phoneno: Yup.string()
      .required("This field is Required")
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        "Phone number is not valid"
      ),

      age: Yup.number()
      .required('Your Age Required')
      .positive()
      .integer()
      .min(18),

      // brithdate:Yup.date()
      // .required('Brithdate Required'),

      birthdate: Yup.date()
      .transform(function (value, originalValue) {
        if (this.isType(value)) {
          return value;
        }
        const result = parse(originalValue, "dd.MM.yyyy", new Date());
        return result;
      })
      .typeError("please enter a valid date")
      .required("Enter Your BirthDate")
      .min("1969-11-13", "Date is too early"),
 

      // brithdate:Yup.string()
      // .required("DOB is Required")
      // .test("DOB", "Please choose a valid date of birth", (value) => {
      //   return moment().diff(moment(value), "years") >= 10;
      // }),
  
  

    email: Yup.string().email('Invalid email').required('Email Address Required'),
  });
  return (
    <div className="App">
       <Formik
       initialValues={{
         firstName: '',
         lastName: '',
         address:'',
         Phoneno:'',
         age:'',
         brithdate:'',
         email: '',
       }}
       validationSchema={SignupSchema}
       onSubmit={values => {
         // same shape as initial values
         console.log(values);
         alert(values.firstName);
         alert(values.lastName);
         alert(values.address);
        alert(values.Phoneno);
        alert(values.age);
        alert(values.brithdate);
         alert(values.email);
     
       }}
     >
       {({ errors, touched }) => (
         <Form>
           firstName:
           <Field name="firstName" />
           {errors.firstName && touched.firstName ? (
             <div>{errors.firstName}</div>
           ) : null}<br></br>
            lastName:
           <Field name="lastName" />
           {errors.lastName && touched.lastName ? (
             <div>{errors.lastName}</div>
           ) : null}<br></br>

           Address:
           <Field name="address" />
           {errors.address && touched.address ? (
             <div>{errors.address}</div>
           ) : null}<br></br>


         PhoneNo:
           <Field name="Phoneno" />
           {errors.Phoneno && touched.Phoneno ? (
             <div>{errors.Phoneno}</div>
           ) : null}<br></br> 

          Age:
           <Field name="age" />
           {errors.age && touched.age ? (
             <div>{errors.age}</div>
           ) : null}<br></br> 
           
          BrithDate:
           <Field name="brithdate"   placeholder="dd.mm.yyyy"/>
           {errors.brithdate && touched.brithdate ? (
             <div>{errors.brithdate}</div>
           ) : null}<br></br> 
           
           Email:
           <Field name="email" type="email" />
           {errors.email && touched.email ? <div>{errors.email}</div> : null}<br>
           </br>   
           <button type="submit">Submit</button>
         </Form>
       )}
     </Formik>
   
    </div>
  );
}

export default App;
