import React from 'react';
import LoginForm from '../components/LoginForm'
import ParticleBackground from "../components/ParticleBackground"

function VerifyPage() {
	return (
		<><LoginForm />
		<ParticleBackground style={{ position: "fixed", zIndex: -1000 }} />
		</>

		)
}

export default VerifyPage;