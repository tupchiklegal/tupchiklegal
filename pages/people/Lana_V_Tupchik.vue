<template>
  <Person>

    <div slot="contact">
      <address class="mt-4">
        <h5>350 Main Street</h5>
        <h5>Suite 2420</h5>
        <h5>Buffalo, New York 14202</h5>
        <h5>
          <a href="mailto:ltupchiklaw@gmail.com">ltupchiklaw@gmail.com</a>
        </h5>
        <h5>Fax: 716-358-1015</h5>
        <h5>Phone: 716-856-5556</h5>
      </address>
    </div>

    <p>
      Lana V. Tupchik is the owner and founding member of the firm. 
      She practices in all areas of family law, including child custody, child support, 
      abuse and neglect matters, and juvenile delinquency matters and criminal matters.  
      She is very active and experienced in the local court systems, 
      representing clients in Western New York, and is dedicated to helping families during a time of crisis. 
      In 2018, Lana received the Recipient of The Honorable Michael F. Dillon Attorney for Children Award, 
      Supreme Court from the Fourth Department Appellate Division of the State of New York, 
      2018 Attorney of the Year award, Erie County Bar Association Assigned Counsel 2017,
      and the Woman of Influence Award in March  2016. 
    </p>
    <p>
      Lana serves on the Attorneys for Children Panel of the 
      Fourth Department where she is appointed by Family and Supreme Court Judges to represent children in custody matters, 
      juvenile delinquency proceedings and abuse and neglect cases. 
      Lana is one of the founding members of the Erie County Raise the Age Collaborative Committee. 
      The Committee was formed with intent and purpose of collectively creating protocols
      to assure the complete and effective implementation of Raise the Age legislation in Erie County.  
      Lana has developed a reputation among colleagues, adversaries and judges as an intelligent, 
      creative and passionate advocate for her clients who is always well-prepared and brings a tough,
      no-nonsense approach in zealously representing her clients. 
      She has been recognized for her legal skills, litigation and trial experience, 
      achievements and her commitment to her work. 
    </p>
    <p>
      Lana is a member of the Bar Association of Erie County and New York State Bar Association,
      and is an active participant with the Bar Association of Erie County’s Family Court Practice and Procedure Committee. 
    </p>
    <p>Fluent in: Fluent in Russian, Belorussian, Ukrainian and Polish languages.</p>
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

<style lang="scss">
  address h5 {
    font-size: 15px !important;
  }
</style>