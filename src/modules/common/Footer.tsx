import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="w-full bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Mailing Address */}
          <div className="flex flex-col gap-3">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              Mailing Address
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Korea University, <br />
              Seoul 08826, Korea College of Engineering
              <br /> 145 Anam-ro, Seongbuk-gu, Seoul, 02841
            </p>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col gap-3">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              Contact
            </h3>
            <div className="flex flex-col text-sm text-gray-600 dark:text-gray-400">
              <p>
                Email:{" "}
                <a
                  href="mailto:lics@korea.ac.kr"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  lics@korea.ac.kr
                </a>
              </p>
              <p>Phone: +82-2-880-1234</p>
              <p>고려대학교 자연계 캠퍼스 신공학관 534호</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="hidden md:flex flex-col gap-3">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              Quick Links
            </h3>
            <div className="flex flex-col text-sm text-gray-600 dark:text-gray-400">
              <Link
                href="/research"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-2"
              >
                Research <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                href="/publications"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-2"
              >
                Publications <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                href="/people"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-2"
              >
                People <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center sm:text-left">
              © 2025 Korea University. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
