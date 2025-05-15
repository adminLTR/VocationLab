
interface ButtonProps {
  imgUrl: string,
  socialMediaName: string
}
function Button({imgUrl, socialMediaName} : ButtonProps) {
  return <button className="w-full flex justify-start items-center gap-4 cursor-pointer font-bold border border-gray-300 rounded-3xl py-3 px-16
  hover:bg-black hover:text-white hover:border-black transition" 
  style={{fontSize: 18}}>
    <img width="23" height="23" src={imgUrl} alt={socialMediaName}/>
    Sign in with {socialMediaName}
  </button>
}

interface ModalLoginProps {
  setShowModal: (x:boolean) => void
}
export default function ModalLogin({setShowModal} : ModalLoginProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/[.83]">
      <div className="relative bg-white rounded-4xl shadow-lg w-full max-w-md mx-auto px-8 pb-14 pt-16">
        {/* Botón de cierre */}
        <button
          className="absolute top-8 right-8 text-gray-400 hover:text-black cursor-pointer transition-colors"
          onClick={()=>setShowModal(false)}
        >
          <i className="fa-solid fa-x"></i>
        </button>

        {/* Logo */}
        <div className="flex justify-center mb-4">
          <img src="/logo_modal.png" alt="Logo de la app" width={65} />
        </div>

        {/* Título */}
        <h2 className="text-xl font-bold text-center my-8">
          Inicia sesión o regístrate en segundos
        </h2>

        {/* Botones */}
        <div className="space-y-3">
          <Button
            imgUrl="https://img.icons8.com/fluency/48/google-logo.png"
            socialMediaName="Google"
          />
          <Button
            imgUrl="https://img.icons8.com/color/48/facebook-new.png"
            socialMediaName="Facebook"
          />
          <Button
            imgUrl="https://img.icons8.com/ios-filled/50/mac-os.png"
            socialMediaName="Apple"
          />
        </div>
      </div>
    </div>
  );
};