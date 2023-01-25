import React from 'react'

export default function Contact() {
  return (
   <>
   <div className="container-fluid mt-5">
   <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d55110.81512635932!2d31.7292544!3d30.3104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2seg!4v1668449275975!5m2!1sar!2seg"></iframe>
   </div>
   <div className="container mt-5">
    <div className="row">
      <div className="col-lg-8">
      <form action="#">
<div class="row form-group mt-3">
<div class="col-md-6 mb-3 mb-md-0">
<label  for="fname">First Name</label>
<input type="text" id="fname" className="form-control"/>
</div>
<div className="col-md-6 ">
<label  for="lname">Last Name</label>
<input type="text" id="lname" class="form-control"/>
</div>
</div>
<div className="row form-group mt-3">
<div className="col-md-12">
<label  for="email">Email</label>
<input type="email" id="email" class="form-control"/>
</div>
</div>
<div class="row form-group mt-3">
<div class="col-md-12">
<label for="subject">Subject</label>
<input type="subject" id="subject" class="form-control"/>
</div>
</div>
<div class="row form-group mt-3">
<div class="col-md-12">
<label  for="message">Message</label>
<textarea name="message" id="message" cols="30" rows="7" class="form-control" placeholder="Write your notes or questions here..."></textarea>
</div>
</div>
<div class="row form-group mt-3">
<div class="col-md-6 bttn">
<button>Send</button>
</div>
</div>
</form>
      </div>
    </div>
  </div>
   </>
  )
}
