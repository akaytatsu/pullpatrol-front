"use client";
import Button from "@/components/Button/Button";
import { useUserLogin } from "@/store/user/stores";

interface ErrorMessageProps {
  message: any;
}

const ErrorMessage = ({ message }: ErrorMessageProps) => (
  <span className="text-red-400 self-center text-sm mt-1">{message}</span>
);

const Page = () => {
  const storeUserLogin = useUserLogin();

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          PullPatrol {storeUserLogin.email}
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <form className="space-y-4 md:space-y-3 flex flex-col">
              <div className="flex flex-col">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Your email
                </label>
                <input
                  value={storeUserLogin.email}
                  onChange={(e) => storeUserLogin.setMail(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  disabled={storeUserLogin.isLoading}
                />
                <ErrorMessage
                  message={storeUserLogin.formValidated?.email?._errors}
                />
              </div>
              <div className=" flex flex-col">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Password
                </label>
                <input
                  value={storeUserLogin.password}
                  onChange={(e) => storeUserLogin.setPassword(e.target.value)}
                  type="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <ErrorMessage
                  message={storeUserLogin.formValidated?.password?._errors}
                />
              </div>
              <ErrorMessage message={storeUserLogin.response?.message} />
              <Button
                text="Sign in"
                onClick={() => storeUserLogin.login()}
                isLoading={storeUserLogin.isLoading}
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
