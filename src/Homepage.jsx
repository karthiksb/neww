import "./App.css";
import Header from "./components/Header/Header";
import Profile from "./components/profile/Profile";

import instagram from "./components/icons/instagram-brands.svg";
import model from "./model.jpg";
import pic1 from "./pic1.jpg";
import pic2 from "./pic2.png";
import pic3 from "./pic3.png";
import pic4 from "./pic4.png";
import pic5 from "./pic5.png";

function Homepage() {
  return (
    <div className=" max-w-[1400px] mx-auto">
      <Header />
      <Profile />
      <section className="flex  h-fit ">
        <div className="w-1/2  flex flex-col justify-between ">
          <h1 className="text-3xl mt-10">
            Hello,<span className="font-bold text-[#F40841]">I'm</span>
          </h1>
          <h1 className="text-6xl font-bold">Kthan Forster</h1>
          <h1 className="text-4xl ">Web designer and Web Developer</h1>
          <p className="my-10">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
            neque hic. Repudiandae iure iste sint hic quidem ullam ab vero.
            Nostrum quas deserunt soluta, ea est consequatur asperiores cumque
            earum quis nihil, odio animi deleniti ab explicabo quod vitae
            obcaecati! Mollitia architecto ea expedita, exercitationem nihil
            possimus culpa? Velit maxime distinctio dolores nostrum dolorem quod
            dolorum harum officiis reprehenderit! Animi, facere a voluptates
            iste atque quisquam dolore, deleniti hic possimus, sit obcaecati
            impedit nesciunt ex sunt neque natus id beatae iure delectus qui
            reprehenderit earum? Vero velit recusandae laboriosam, vel tenetur
            est a, quo sunt quia explicabo accusamus repudiandae distinctio
            quasi nesciunt necessitatibus modi sapiente quos in delectus iste
            excepturi iure molestias. Perferendis voluptate totam architecto
          </p>

          <div className="social flex flex-col ">
            <h1 className="text-2xl my-4">FIND ME ON</h1>
            <div className="flex flex-row gap-5">
              <div className="w-[70px] h-[70px] bg-yellow-400 rounded-xl flex items-center justify-center">
                <img className="w-[50px]" src={instagram} alt="" />
              </div>
              <div className="w-[70px] h-[70px] bg-yellow-400 rounded-xl flex items-center justify-center">
                <img className="w-[50px]" src={instagram} alt="" />
              </div>
              <div className="w-[70px] h-[70px] bg-yellow-400 flex rounded-xl items-center justify-center">
                <img className="w-[50px]" src={instagram} alt="" />
              </div>
              <div className="w-[70px] h-[70px] bg-yellow-400 flex rounded-xl items-center justify-center">
                <img className="w-[50px]" src={instagram} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 h-fit  flex my-10 flex-col items-center justify-between  gap-8">
          <img src={model} className="h-[500px] rounded-2xl" alt="" />
          <div className="flex flex-row gap-8">
            <div className="flex flex-col">
              <h1 className="text-3xl ">20+</h1>
              <p className="text-sm">YEARS OF EXPERIENCE</p>
            </div>
            <div className="flex flex-col">
              <h1 className="text-3xl ">600+</h1>
              <p className="text-sm"> GLOBAL WORKING CLIENT</p>
            </div>
            <div className="flex flex-col">
              <h1 className="text-3xl ">10+</h1>
              <p className="text-sm">AWARDS WIN</p>
            </div>
          </div>
        </div>
      </section>
      <section className="my-10">
        <h1 className="text-xl text-yellow-500 my-3 font-semibold">
          MY SERVICES
        </h1>
        <h1 className="text-3xl font-bold">What I Do?</h1>

        <main className="showcase grid grid-cols-3 my-10 gap-8">
          <div className="rounded-xl  bg-yellow-400 flex p-14">
            <div className="flex flex-col gap-4   ">
              <h1 className="text-2xl font-semibold">Website Design</h1>
              <p className="text-sm  ">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati a ut accusantium porro impedit iste hic tenetur
                accusamus nobis suscipit.
              </p>
            </div>
          </div>
          <div className=" rounded-xl bg-yellow-400 flex p-14">
            <div className="flex flex-col gap-4   ">
              <h1 className="text-2xl font-semibold">App Development</h1>
              <p className="text-sm  ">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati a ut accusantium porro impedit iste hic tenetur
                accusamus nobis suscipit.
              </p>
            </div>
          </div>
          <div className="rounded-xl  bg-yellow-400 flex p-14">
            <div className="flex flex-col gap-4   ">
              <h1 className="text-2xl font-semibold">Business strategy</h1>
              <p className="text-sm  ">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati a ut accusantium porro impedit iste hic tenetur
                accusamus nobis suscipit.
              </p>
            </div>
          </div>

          <div className="rounded-xl  bg-yellow-400 flex p-14">
            <div className="flex flex-col gap-4   ">
              <h1 className="text-2xl font-semibold">Website Design</h1>
              <p className="text-sm  ">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati a ut accusantium porro impedit iste hic tenetur
                accusamus nobis suscipit.
              </p>
            </div>
          </div>
          <div className=" rounded-xl bg-yellow-400 flex p-14">
            <div className="flex flex-col gap-4   ">
              <h1 className="text-2xl font-semibold">Website Design</h1>
              <p className="text-sm  ">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati a ut accusantium porro impedit iste hic tenetur
                accusamus nobis suscipit.
              </p>
            </div>
          </div>
          <div className=" rounded-xl bg-yellow-400 flex p-14">
            <div className="flex flex-col gap-4   ">
              <h1 className="text-2xl font-semibold">Website Design</h1>
              <p className="text-sm  ">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati a ut accusantium porro impedit iste hic tenetur
                accusamus nobis suscipit.
              </p>
            </div>
          </div>
        </main>
      </section>
      <section className="my-[100px]">
        <div className="w-full justify-center flex  ">
          <h1 className="text-4xl font-bold w-fit ">Our Projects</h1>
        </div>

        <div className="w-full projectgallery grid grid-cols-4 my-10 gap-5">
          <div className="w-fit relative">
            <img src={pic1} alt="" className="" />
            <div className="w-full h-full top-0  absolute hover:bg-[#242323b4]  "></div>
          </div>
          <div className="w-fit relative">
            <img src={pic2} alt="" className="" />
            <div className="w-full h-full top-0  absolute hover:bg-[#242323b4]  "></div>
          </div>{" "}
          <div className="w-fit relative">
            <img src={pic3} alt="" className="" />
            <div className="w-full h-full top-0  absolute hover:bg-[#242323b4]  "></div>
          </div>{" "}
          <div className="w-fit relative">
            <img src={pic4} alt="" className="" />
            <div className="w-full h-full top-0  absolute hover:bg-[#242323b4]  "></div>
          </div>{" "}
          <div className="w-fit relative">
            <img src={pic5} alt="" className="" />
            <div className="w-full h-full top-0  absolute hover:bg-[#242323b4]  "></div>
          </div>{" "}
          <div className="w-fit relative">
            <img src={pic1} alt="" className="" />
            <div className="w-full h-full top-0  absolute hover:bg-[#242323b4]  "></div>
          </div>{" "}
          <div className="w-fit relative">
            <img src={pic4} alt="" className="" />
            <div className="w-full h-full top-0  absolute hover:bg-[#242323b4]  "></div>
          </div>{" "}
          <div className="w-fit relative">
            <img src={pic3} alt="" className="" />
            <div className="w-full h-full top-0  absolute hover:bg-[#242323b4]  "></div>
          </div>{" "}
          <div className="w-fit relative">
            <img src={pic2} alt="" className="" />
            <div className="w-full h-full top-0  absolute hover:bg-[#242323b4]  "></div>
          </div>{" "}
          <div className="w-fit relative">
            <img src={pic5} alt="" className="" />
            <div className="w-full h-full top-0  absolute hover:bg-[#242323b4]  "></div>
          </div>{" "}
        </div>
      </section>
      <div class="max-w-screen-md mx-auto p-5">
        <div class="text-center mb-16"></div>

        <form class="w-full">
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-first-name"
              >
                First Name
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Jane"
              />
              <p class="text-red-500 text-xs italic">
                Please fill out this field.
              </p>
            </div>
            <div class="w-full md:w-1/2 px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Last Name
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="Doe"
              />
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-password"
              >
                Email Address
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-email"
                type="email"
                placeholder="********@*****.**"
              />
            </div>
          </div>

          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-password"
              >
                Your Message
              </label>
              <textarea
                rows="10"
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              ></textarea>
            </div>
            <div class="flex justify-between w-full px-3">
              <div class="md:flex md:items-center">
                <label class="block text-gray-500 font-bold"></label>
                <input class="mr-2 leading-tight" type="checkbox" />
                <span class="text-sm">Send me your newsletter!</span>
              </div>
              <button
                class="shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
                type="submit"
              >
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Homepage;
