import SwitchCheck from "../components/SwitchCheck"

export default function Home() {
  return (
  <div className="home h-screen flex items-center w-screen ">
    <div className="h-full flex items-center w-full">
      <div className="w-full"></div>
      <div className="w-full">
        <div className="flex ">
          <div className="border bg-slate-50 rounded-xl p-6">
          <div className="">
            <div className=" items-center gap-4 flex justify-between min-h-[5rem]">
              <button className="bg-blue-500 rounded-full px-6 py-2  text-white">Acesso Swooder</button>
              <button className="bg-blue-500 rounded-full px-6 py-2  text-white">Acesso Empresa</button>
            </div>
            <div className="salutation">
              <span className="  text-3xl font-semibold font-sans text-slate-800">Bem vindo Swooder!</span>
              <p className=" text-slate-500 text-sm font-bold font-sans mt-4 mb-2" >Vamos começar fazendo o login na sua conta</p>
            </div>
          </div>
            <form action="#" className="">
              <div className="userEmail flex flex-col pb-4">
                <label className="text-slate-700 text-sm font-mono font-bold pl-4" htmlFor="email">Usuário</label>
                <input className="border border-slate-400 rounded-full p-2 flex items-center" type="email" placeholder="Digite seu e-mail" />
              </div>
              <div className="password flex flex-col pb-4">
                <label className="text-slate-700 text-sm font-mono font-bold pl-4"  htmlFor="password">Senha</label>
                <input className="border border-slate-400 rounded-full p-2 flex items-center" type="password" placeholder="* * * * *" />
              </div>
            <div className="actions">
              <div className="text-blue-600 font-semibold text-sm"><a href="#">Esqueci minha Senha</a></div>
              <div className="">
                <span className="text-sm font-bold text-slate-700">Modo de privacidade</span>
                <div className="flex justify-between">
                  <span className="text-sm text-slate-400 font-semibold">Os seus dados serão ocultados</span>
                  <SwitchCheck />
                </div>
              </div>
            </div>
            <div className="submit mt-2">
            <input type="submit" value={'Entrar'} className="bg-blue-500 rounded-full px-6 py-2  text-white w-full" />  
            </div>            
          </form>
          <div className="info flex justify-between mt-4 text-slate-400 text-sm font-bold">
            <span>Login empresa</span>
            <span>Termos de serviços</span>
            <span>Contato</span>
          </div>
         </div>
        </div>
      </div>
    </div>
  </div>
  )
}
