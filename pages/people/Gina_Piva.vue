<template>
  <Person id="3">

      <div slot="contact">
        <address class="mt-3">
          <h5>350 Main Street</h5>
          <h5>Suite 2420</h5>
          <h5>Buffalo, New York 14202</h5>
          <h5>
            <a href="mailto:ginapiva@buffalo.edu">ginapiva@buffalo.edu</a>
          </h5>
          <h5>Fax: 716-358-1015</h5>
          <h5>Phone: 716-856-5556</h5>
        </address>
      </div>

      <p>
      Gina is a lifelong Western New York resident. 
      A graduate of Niagara County Community College (with distinction) and the University at Buffalo (magna cum laude), 
      she is pursuing her law degree at the University at Buffalo School of Law. 
      She is a third-year law student with expected graduation in May 2020. 
      While at the University at Buffalo School of Law, 
      Gina was an Associate on the Public Interest Law Journal and the Environmental Law Journal. 
      She has been a Student Attorney in the Women’s Rights and Family Violence Clinic and is currently a Student Attorney in the Mediation Clinic.
      Both of these experiences have given Gina a hands-on experience as compared to traditional learning.
      </p>
    

  </person>
</template>

<script>
import Person from './../../layouts/Person.vue'

export default {
  components: {
    Person
  }
}
</script>