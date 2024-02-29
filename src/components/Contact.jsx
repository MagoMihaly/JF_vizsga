import React from 'react'
import { useState } from 'react'

export const Contact = () => {
  const [email, setEmail] = useState('')
  const [feedback, setFeedback] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = { email, feedback, timestamp: Date.now() }
    console.log(formData);
  }

  return (

    <section className='container p-2 shadow'>
      <form onSubmit={handleSubmit}>
        <h2 className='text-secondary'>Provide Feedback</h2>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" id="feedbackEmail" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label">Feedback</label>
          <textarea className="form-control" id="feedbackText" rows="3" value={feedback} onChange={(e) => setFeedback(e.target.value)}></textarea>
          <button type="submit" className="btn btn-primary mt-3">Submit</button>
        </div>
      </form>
    </section>
  )
}

