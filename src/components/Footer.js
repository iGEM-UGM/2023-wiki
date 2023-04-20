import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <div class="w-screen overflow-hidden relative bg-primary-200 h-full">
        <div class="flex flex-col items-center relative lg:flex-row lg:px-8 lg:items-start justify-center pt-20">
          <div class=" flex flex-row justify-center gap-x-12 lg:flex-col gap-y-6 lg:pr-8">
            <Image src="/assets/logo_ugm.png" alt="" width={100} height={100} />
            <Image
              src="/assets/logo_igem.png"
              alt=""
              width={100}
              height={100}
            />
          </div>
          <div class="lg:w-[40%] lg:text-start lg:left-0 relative xl:w-[45%] xl:pl-2 pt-20 lg:pt-0">
            <h1 class="font-montserrat text-[#FFFFFF] text-3xl font-bold text-center lg:text-start lg:text-5xl pb-6">
              iGEM UGM
            </h1>
            <h1 class="font-poppins text-[#FFFFFF] text-sm px-5 text-center font-normal lg:text-start lg:px-0 lg:text-base">
              Bulaksumur F11, Caturtunggal, Kecamatan Depok, Kabupaten Sleman,
              Daerah Istimewa Yogyakarta, Indonesia 55281
            </h1>
            <h1 class="font-poppins text-[#FFFFFF] text-sm px-5 text-center py-5 font-light lg:text-start lg:px-0 lg:text-base">
              igemugm@gmail.com
            </h1>
          </div>
          <div class="flex flex-col relative right-0 lg:pl-20 xl:pl-40">
            <h1 class="font-montserrat text-[#FFFFFF] text-3xl font-bold lg:text-5xl lg:justify-start">
              Get in Touch!
            </h1>

            <div class="flex flex-row relative justify-center items-center py-6 w-[100%] gap-x-5 lg:scale-[150%] ">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#FFFFFF"
                xmlns="http://www.w3.org/2000/svg"
                class="hover:fill-primary-100 cursor-pointer">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.05273 0.072C8.33236 0.0130909 8.74036 0 12 0C15.2596 0 15.6676 0.0141818 16.9462 0.072C18.2247 0.129818 19.0975 0.333818 19.8611 0.629455C20.6607 0.931636 21.3862 1.404 21.9862 2.01491C22.5971 2.61382 23.0684 3.33818 23.3695 4.13891C23.6662 4.90255 23.8691 5.77527 23.928 7.05164C23.9869 8.33346 24 8.74146 24 12C24 15.2596 23.9858 15.6676 23.928 16.9473C23.8702 18.2236 23.6662 19.0964 23.3695 19.86C23.0684 20.6608 22.5963 21.3864 21.9862 21.9862C21.3862 22.5971 20.6607 23.0684 19.8611 23.3695C19.0975 23.6662 18.2247 23.8691 16.9484 23.928C15.6676 23.9869 15.2596 24 12 24C8.74036 24 8.33236 23.9858 7.05273 23.928C5.77636 23.8702 4.90364 23.6662 4.14 23.3695C3.33919 23.0683 2.61362 22.5963 2.01382 21.9862C1.40332 21.3869 0.930889 20.6617 0.629455 19.8611C0.333818 19.0975 0.130909 18.2247 0.072 16.9484C0.0130909 15.6665 0 15.2585 0 12C0 8.74036 0.0141818 8.33236 0.072 7.05382C0.129818 5.77527 0.333818 4.90255 0.629455 4.13891C0.931334 3.33827 1.40413 2.61307 2.01491 2.01382C2.61386 1.40346 3.3387 0.931029 4.13891 0.629455C4.90255 0.333818 5.77527 0.130909 7.05164 0.072H7.05273ZM16.8491 2.232C15.5836 2.17418 15.204 2.16218 12 2.16218C8.796 2.16218 8.41636 2.17418 7.15091 2.232C5.98036 2.28545 5.34545 2.48073 4.92218 2.64545C4.36255 2.86364 3.96218 3.12218 3.54218 3.54218C3.14405 3.92951 2.83765 4.40104 2.64545 4.92218C2.48073 5.34545 2.28545 5.98036 2.232 7.15091C2.17418 8.41636 2.16218 8.796 2.16218 12C2.16218 15.204 2.17418 15.5836 2.232 16.8491C2.28545 18.0196 2.48073 18.6545 2.64545 19.0778C2.83745 19.5982 3.144 20.0705 3.54218 20.4578C3.92945 20.856 4.40182 21.1625 4.92218 21.3545C5.34545 21.5193 5.98036 21.7145 7.15091 21.768C8.41636 21.8258 8.79491 21.8378 12 21.8378C15.2051 21.8378 15.5836 21.8258 16.8491 21.768C18.0196 21.7145 18.6545 21.5193 19.0778 21.3545C19.6375 21.1364 20.0378 20.8778 20.4578 20.4578C20.856 20.0705 21.1625 19.5982 21.3545 19.0778C21.5193 18.6545 21.7145 18.0196 21.768 16.8491C21.8258 15.5836 21.8378 15.204 21.8378 12C21.8378 8.796 21.8258 8.41636 21.768 7.15091C21.7145 5.98036 21.5193 5.34545 21.3545 4.92218C21.1364 4.36255 20.8778 3.96218 20.4578 3.54218C20.0705 3.14408 19.5989 2.83768 19.0778 2.64545C18.6545 2.48073 18.0196 2.28545 16.8491 2.232ZM10.4673 15.6993C11.3233 16.0556 12.2764 16.1037 13.1639 15.8353C14.0514 15.567 14.8182 14.9988 15.3334 14.2279C15.8485 13.457 16.0801 12.5311 15.9884 11.6085C15.8968 10.6858 15.4876 9.82361 14.8309 9.16909C14.4123 8.7507 13.906 8.43034 13.3487 8.23107C12.7914 8.0318 12.1968 7.95858 11.6078 8.01667C11.0188 8.07477 10.45 8.26274 9.94233 8.56705C9.43468 8.87136 9.00081 9.28445 8.67197 9.77657C8.34312 10.2687 8.12748 10.8276 8.04056 11.413C7.95365 11.9985 7.99762 12.596 8.16932 13.1624C8.34101 13.7288 8.63616 14.2501 9.03351 14.6888C9.43087 15.1275 9.92054 15.4726 10.4673 15.6993ZM7.63855 7.63855C8.2113 7.06579 8.89126 6.61146 9.6396 6.30149C10.3879 5.99151 11.19 5.83197 12 5.83197C12.81 5.83197 13.6121 5.99151 14.3604 6.30149C15.1087 6.61146 15.7887 7.06579 16.3615 7.63855C16.9342 8.2113 17.3885 8.89126 17.6985 9.6396C18.0085 10.3879 18.168 11.19 18.168 12C18.168 12.81 18.0085 13.6121 17.6985 14.3604C17.3885 15.1087 16.9342 15.7887 16.3615 16.3615C15.2047 17.5182 13.6359 18.168 12 18.168C10.3641 18.168 8.79528 17.5182 7.63855 16.3615C6.48182 15.2047 5.83197 13.6359 5.83197 12C5.83197 10.3641 6.48182 8.79528 7.63855 7.63855ZM19.536 6.75055C19.6779 6.61666 19.7916 6.45565 19.8701 6.27706C19.9487 6.09847 19.9907 5.90593 19.9935 5.71083C19.9964 5.51574 19.9601 5.32205 19.8867 5.14125C19.8134 4.96044 19.7045 4.79619 19.5665 4.65822C19.4285 4.52026 19.2643 4.41137 19.0835 4.33802C18.9027 4.26467 18.709 4.22834 18.5139 4.23118C18.3188 4.23403 18.1263 4.27599 17.9477 4.35458C17.7691 4.43317 17.6081 4.54679 17.4742 4.68873C17.2138 4.96476 17.0712 5.33141 17.0768 5.71083C17.0823 6.09026 17.2355 6.4526 17.5038 6.72092C17.7721 6.98924 18.1345 7.14243 18.5139 7.14796C18.8933 7.15349 19.26 7.01093 19.536 6.75055Z"
                />
              </svg>
              <svg
                width="24"
                height="20"
                viewBox="0 0 24 20"
                fill="#FFFFFF"
                xmlns="http://www.w3.org/2000/svg"
                class="hover:fill-primary-100 cursor-pointer">
                <path d="M23.643 2.93702C22.808 3.30702 21.911 3.55702 20.968 3.67002C21.941 3.08781 22.669 2.17148 23.016 1.09202C22.1019 1.63501 21.1014 2.01721 20.058 2.22202C19.3564 1.47288 18.4271 0.976342 17.4143 0.80949C16.4016 0.642638 15.3621 0.814807 14.4573 1.29927C13.5524 1.78373 12.8328 2.55338 12.4102 3.48872C11.9875 4.42406 11.8855 5.47277 12.12 6.47202C10.2677 6.37901 8.45564 5.89757 6.80144 5.05892C5.14723 4.22028 3.68785 3.04318 2.51801 1.60402C2.11801 2.29402 1.88801 3.09402 1.88801 3.94602C1.88757 4.71301 2.07644 5.46826 2.43789 6.14475C2.79934 6.82124 3.32217 7.39805 3.96001 7.82402C3.22029 7.80048 2.49688 7.6006 1.85001 7.24102V7.30102C1.84994 8.37676 2.22204 9.41939 2.90319 10.252C3.58435 11.0846 4.53258 11.6559 5.58701 11.869C4.9008 12.0547 4.18135 12.0821 3.48301 11.949C3.78051 12.8746 4.36001 13.684 5.14038 14.2639C5.92075 14.8438 6.86293 15.1652 7.83501 15.183C6.18485 16.4784 4.1469 17.1811 2.04901 17.178C1.67739 17.1781 1.30609 17.1564 0.937012 17.113C3.06649 18.4822 5.54535 19.2088 8.07701 19.206C16.647 19.206 21.332 12.108 21.332 5.95202C21.332 5.75202 21.327 5.55002 21.318 5.35002C22.2293 4.69099 23.0159 3.87491 23.641 2.94002L23.643 2.93702Z" />
              </svg>
              <svg
                width="20"
                height="14"
                viewBox="0 0 20 14"
                fill="#FFFFFF"
                xmlns="http://www.w3.org/2000/svg"
                class="hover:fill-primary-100 cursor-pointer">
                <path d="M8 10L13.19 7L8 4V10ZM19.56 2.17C19.69 2.64 19.78 3.27 19.84 4.07C19.91 4.87 19.94 5.56 19.94 6.16L20 7C20 9.19 19.84 10.8 19.56 11.83C19.31 12.73 18.73 13.31 17.83 13.56C17.36 13.69 16.5 13.78 15.18 13.84C13.88 13.91 12.69 13.94 11.59 13.94L10 14C5.81 14 3.2 13.84 2.17 13.56C1.27 13.31 0.69 12.73 0.44 11.83C0.31 11.36 0.22 10.73 0.16 9.93C0.0900001 9.13 0.0599999 8.44 0.0599999 7.84L0 7C0 4.81 0.16 3.2 0.44 2.17C0.69 1.27 1.27 0.69 2.17 0.44C2.64 0.31 3.5 0.22 4.82 0.16C6.12 0.0899998 7.31 0.0599999 8.41 0.0599999L10 0C14.19 0 16.8 0.16 17.83 0.44C18.73 0.69 19.31 1.27 19.56 2.17Z" />
              </svg>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="#FFFFFF"
                xmlns="http://www.w3.org/2000/svg"
                class="hover:fill-primary-100 cursor-pointer">
                <path d="M16 0C16.5304 0 17.0391 0.210714 17.4142 0.585786C17.7893 0.960859 18 1.46957 18 2V16C18 16.5304 17.7893 17.0391 17.4142 17.4142C17.0391 17.7893 16.5304 18 16 18H2C1.46957 18 0.960859 17.7893 0.585786 17.4142C0.210714 17.0391 0 16.5304 0 16V2C0 1.46957 0.210714 0.960859 0.585786 0.585786C0.960859 0.210714 1.46957 0 2 0H16ZM15.5 15.5V10.2C15.5 9.33539 15.1565 8.5062 14.5452 7.89483C13.9338 7.28346 13.1046 6.94 12.24 6.94C11.39 6.94 10.4 7.46 9.92 8.24V7.13H7.13V15.5H9.92V10.57C9.92 9.8 10.54 9.17 11.31 9.17C11.6813 9.17 12.0374 9.3175 12.2999 9.58005C12.5625 9.8426 12.71 10.1987 12.71 10.57V15.5H15.5ZM3.88 5.56C4.32556 5.56 4.75288 5.383 5.06794 5.06794C5.383 4.75288 5.56 4.32556 5.56 3.88C5.56 2.95 4.81 2.19 3.88 2.19C3.43178 2.19 3.00193 2.36805 2.68499 2.68499C2.36805 3.00193 2.19 3.43178 2.19 3.88C2.19 4.81 2.95 5.56 3.88 5.56ZM5.27 15.5V7.13H2.5V15.5H5.27Z" />
              </svg>
            </div>
          </div>
        </div>
        <h1 class="text-xs font-light text-center font-poppins text-[#FFFFFF] px-12 pb-6 pt-12">
          All content on this wiki is available under the Creative Commons
          Attribution 4.0 license (or any later version).
        </h1>
      </div>
    </>
  );
};

export default Footer;
