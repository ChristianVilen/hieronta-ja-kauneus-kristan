import React, { PropsWithChildren } from "react";

const FooterLink = (
  props: PropsWithChildren<{ href: string; target: string; rel: string }>
) => (
  <a
    href={props.href}
    target={props.target}
    rel={props?.rel}
    className="font-semibold hover:text-gray-900"
  >
    {props.children}
  </a>
);

export default function Footer() {
  return (
    <footer className="relative p-6 text-sm bg-gray-200">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap items-end">
          <div className="w-full px-4 text-base lg:w-6/12">
            <p>-Kokonaisvaltaista hyvinvointia-</p>
          </div>
          <div className="flex flex-wrap w-full px-4 lg:w-6/12 lg:text-left">
            <div className="w-full px-4 mt-3 lg:w-5/12">
              <span className="block mb-1 text-sm font-semibold uppercase opacity-75">
                Sosiaaliset Mediat
              </span>
              <ul className="list-unstyled">
                <li>
                  <FooterLink
                    href="https://www.instagram.com/hierontakauneuskristan/"
                    target="_blank"
                    rel="noreferrer nofollow"
                  >
                    Instagram
                  </FooterLink>
                </li>
                <li>
                  <FooterLink
                    href="https://www.facebook.com/HierontaKauneusKristaN"
                    target="_blank"
                    rel="nofollow noreferrer"
                  >
                    Facebook
                  </FooterLink>
                </li>
              </ul>
            </div>
            <div className="w-full px-4 mt-3 lg:w-5/12">
              <span className="block mb-1 text-sm font-semibold uppercase opacity-75">
                About
              </span>
              <ul className="list-unstyled">
                <li>
                  <FooterLink href="/palvelut" target="" rel="">
                    Palvelut
                  </FooterLink>
                </li>
                <li>
                  <FooterLink href="/palvelut" target="" rel="">
                    Yhteystiedot
                  </FooterLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="mt-3 mb-6 border-gray-400" />
        <div className="w-full mx-auto">
          <p className="py-1 text-sm">
            © {new Date().getFullYear()} Hieronta & Kauneus KristaN
          </p>
        </div>
      </div>
    </footer>
  );
}
