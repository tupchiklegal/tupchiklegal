<template>

  <Person id="2" >

  <div slot="contact">
    <address class="mt-3">
      <h5>350 Main Street</h5>
      <h5>Suite 2420</h5>
      <h5>Buffalo, New York 14202</h5>
      <h5>
        <a href="mailto:infotupchiklegalgroup@gmail.com">
            infotupchiklegalgroup@gmail.com
          </a>
      </h5>
      <h5>Fax: 716-358-1015</h5>
      <h5>Phone: 716-856-5556</h5>
    </address>
  </div>

    <p>
    Melissa has over twelve years experience in family law. Melissa is a graduate of Hilbert
    College, with a Bachelor’s degree in Paralegal Studies in 2007 and a Bachelor’s in Business
    Administration in 2001 and joined the firm in 2019.
    </p>

    <p>
    Melissa uses her considerable multitasking skills and client care to help families in transition by
    providing detailed support to the clients and attorneys. From complex litigation to the simple
    uncontested divorces, she is involved from beginning to end. Melissa assists clients by providing
    regular contact, managing the discovery process, maintaining the case files, managing deadlines
    and drafting pleading and letters.
    </p>

    <p>
    In her spare time, Melissa enjoys reading, traveling, and attending concerts with her husband and
    spending time with their collection of cats.
    </p>

  </person>
</template>

<script>
import Person from './../../layouts/Person.vue'

export default {
  components: {
    Person
  },
}
</script>