import { NextPage } from "next";
import MainLayout from "../../components/layouts/MainLayout";
import { ContactForm } from "../../components/forms/ContactForm";
import { offices } from "../../config/offices";
import { FORMSPREE_ID } from "../../config/formspree";

const ContactPage: NextPage = () => {
  return (
    <MainLayout
      title="联系我们 - Technology Company Official Website"
      description="联系我们，了解更多信息"
    >
      {/* Page title */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-primary/20 pt-14">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Contact Us
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Reach out to us anytime for professional services and solutions
            </p>
          </div>
        </div>
      </div>

      {/* Contact information */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {offices.map((office) => (
            <div
              key={office.city}
              className="rounded-2xl bg-gray-50 p-8 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-gray-900">
                {office.city}
              </h3>
              <address className="mt-6 space-y-4 text-base not-italic text-gray-600">
                <p>{office.address}</p>
                <p>Phone: {office.phone}</p>
                <p>Email: {office.email}</p>
              </address>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Contact Us
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              If you have any questions or needs, please feel free to contact us. Our team will be happy to serve you.
            </p>

           
            <ContactForm formspreeId={FORMSPREE_ID} />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ContactPage;
