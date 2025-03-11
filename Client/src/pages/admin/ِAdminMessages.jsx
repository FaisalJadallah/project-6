import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Mail,
  MessageCircle,
  Calendar,
  AlertTriangle,
  ChevronRight,
  ChevronLeft,
  User,
  Search,
  RefreshCcw,
  Send,
  Inbox,
} from "lucide-react";

const AdminMessages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [replyMessage, setReplyMessage] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Fetch messages
  useEffect(() => {
    fetchMessages();
  }, []);

  // Function to fetch messages
  const fetchMessages = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "http://localhost:4000/api/contact-messages"
      );
      setMessages(response.data);
      setError(null);
    } catch (err) {
      console.error("❌ خطأ في جلب الرسائل:", err);
      setError("حدث خطأ أثناء تحميل الرسائل.");
    } finally {
      setLoading(false);
    }
  };

  // Function to reply to a message
  const handleReplyToMessage = async (email, replyMessage) => {
    if (!replyMessage.trim()) {
      alert("❌ الرجاء كتابة رد قبل الإرسال");
      return;
    }

    try {
      await axios.post("http://localhost:4000/api/contact-messages/reply", {
        email,
        replyMessage,
      });
      alert("✅ تم إرسال الرد بنجاح");
      setReplyMessage(""); // Clear the reply message input
    } catch (err) {
      console.error("❌ خطأ في إرسال الرد:", err);
      alert("❌ فشل في إرسال الرد");
    }
  };

  // Filter messages based on search term
  const filteredMessages = messages.filter(
    (message) =>
      message.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.message?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gray-50 min-h-screen p-4 lg:p-6 mr-20 lg:mr-64">
      {/* Main Content Area that pushes from sidebar */}
      <div className="flex flex-col h-full">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 flex items-center">
              <Inbox className="ml-2 text-blue-600" />
              <span>الرسائل الواردة</span>
            </h1>
            <p className="mt-1 text-gray-600">
              إدارة الرسائل والاستفسارات من المستخدمين
            </p>
          </div>

          <div className="mt-4 md:mt-0 flex flex-wrap gap-3">
            <div className="relative flex-grow max-w-xs">
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pr-10 border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-right"
                placeholder="بحث في الرسائل..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <button
              onClick={fetchMessages}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition duration-200 flex items-center"
            >
              <RefreshCcw className="h-4 w-4 ml-2" />
              تحديث
            </button>
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center p-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="p-6 text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-lg bg-red-100 text-red-800">
              <AlertTriangle className="w-5 h-5 ml-2" />
              {error}
            </div>
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && filteredMessages.length === 0 && (
          <div className="flex flex-col items-center justify-center p-12 bg-white rounded-lg shadow-sm">
            <div className="bg-gray-100 p-6 rounded-full mb-4">
              <Mail className="h-12 w-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-medium text-gray-700 mb-2">
              لا توجد رسائل
            </h3>
            <p className="text-gray-500">
              {searchTerm
                ? "لم يتم العثور على نتائج تطابق بحثك"
                : "لا توجد رسائل واردة حالياً"}
            </p>
          </div>
        )}

        {/* Message List and Detail View */}
        {!loading && !error && filteredMessages.length > 0 && (
          <div className="flex flex-col md:flex-row gap-4 h-full">
            {/* Toggle Button for Mobile */}
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="md:hidden mb-4 bg-gray-200 p-2 rounded-full text-gray-600 hover:bg-gray-300 self-end"
            >
              {sidebarOpen ? (
                <ChevronRight className="w-5 h-5" />
              ) : (
                <ChevronLeft className="w-5 h-5" />
              )}
              <span className="sr-only">
                {sidebarOpen ? "إخفاء قائمة الرسائل" : "عرض قائمة الرسائل"}
              </span>
            </button>

            {/* Messages List */}
            {(sidebarOpen || !selectedMessage) && (
              <div className="w-full md:w-2/5 lg:w-1/3 bg-white rounded-lg shadow overflow-hidden">
                <div className="p-3 bg-gray-50 border-b border-gray-200">
                  <h2 className="font-bold text-gray-700 flex items-center justify-center">
                    <MessageCircle className="ml-2 text-blue-600" />
                    قائمة الرسائل ({filteredMessages.length})
                  </h2>
                </div>
                <div className="overflow-y-auto max-h-96 md:max-h-[calc(100vh-250px)]">
                  {filteredMessages.map((message) => (
                    <div
                      key={message.id}
                      onClick={() => {
                        setSelectedMessage(message);
                        if (window.innerWidth < 768) {
                          setSidebarOpen(false);
                        }
                      }}
                      className={`border-b border-gray-200 p-4 cursor-pointer hover:bg-gray-50 transition-all ${
                        selectedMessage?.id === message.id
                          ? "bg-blue-50 border-r-4 border-r-blue-500"
                          : ""
                      }`}
                    >
                      <div className="flex justify-between items-start">
                        <div className="font-medium text-gray-800 flex items-center">
                          <User className="w-4 h-4 ml-2 text-blue-600" />
                          <span className="truncate max-w-[120px] md:max-w-[150px]">
                            {message.email || "مجهول"}
                          </span>
                        </div>
                        <div className="text-xs text-gray-500 flex items-center whitespace-nowrap">
                          <Calendar className="w-3 h-3 ml-1" />
                          {new Date(message.createdAt).toLocaleDateString()}
                        </div>
                      </div>
                      <div className="mt-2 text-gray-600 text-sm overflow-hidden text-right truncate">
                        {message.message}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Message Detail */}
            {selectedMessage && (
              <div
                className={`w-full ${
                  sidebarOpen ? "md:w-3/5 lg:w-2/3" : "md:w-full"
                } bg-white rounded-lg shadow`}
              >
                <div className="p-4 bg-gray-50 border-b border-gray-200 flex justify-between items-center">
                  <h2 className="font-bold text-gray-700">تفاصيل الرسالة</h2>
                  <button
                    onClick={() => {
                      setSelectedMessage(null);
                      setSidebarOpen(true);
                    }}
                    className="md:hidden bg-gray-200 p-2 rounded-full text-gray-600 hover:bg-gray-300"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

                <div className="p-4">
                  <div className="bg-gray-50 p-4 rounded-lg mb-6">
                    <div className="flex flex-wrap justify-between items-center mb-4">
                      <div className="font-medium text-gray-800 flex items-center">
                        <Mail className="w-5 h-5 ml-2 text-blue-600" />
                        من: {selectedMessage.email || "مجهول"}
                      </div>
                      <div className="text-sm text-gray-500 mt-2 md:mt-0">
                        {new Date(selectedMessage.createdAt).toLocaleString()}
                      </div>
                    </div>

                    {selectedMessage.subject && (
                      <div className="text-lg font-medium text-gray-800 mb-2">
                        {selectedMessage.subject}
                      </div>
                    )}
                  </div>

                  <div className="bg-white p-6 rounded-lg border border-gray-200 whitespace-pre-line text-right leading-relaxed text-gray-700 min-h-[200px] max-h-[300px] overflow-y-auto">
                    {selectedMessage.message}
                  </div>

                  {/* Reply Form */}
                  <div className="mt-6">
                    <h3 className="text-lg font-medium text-gray-800 mb-4 flex items-center">
                      <Send className="ml-2 h-5 w-5 text-blue-600" />
                      إرسال رد
                    </h3>
                    <textarea
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-right"
                      rows="4"
                      placeholder="اكتب ردك هنا..."
                      value={replyMessage}
                      onChange={(e) => setReplyMessage(e.target.value)}
                    ></textarea>
                    <button
                      onClick={() =>
                        handleReplyToMessage(
                          selectedMessage.email,
                          replyMessage
                        )
                      }
                      className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-200 flex items-center"
                    >
                      <Send className="ml-2 h-4 w-4" />
                      إرسال الرد
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminMessages;
