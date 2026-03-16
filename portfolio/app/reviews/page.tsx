
import DotsBackground from "../components/DotsBackground";
const reviewsData = [
  { id: 1, name: "Weena Ramen", stars: 5, body: "I had the pleasure of mentoring Yashvin during his internship at iLoop, where he worked on stock market prediction. He demonstrated strong analytical reasoning, a solid understanding of financial data patterns, and thoughtful application of machine learning models to forecast market trends. His ability to interpret results critically and present insights clearly was particularly impressive. Yashvin showed dedication, curiosity, and consistency throughout the internship. He would be a valuable asset to any team working in data science, quantitative analysis, or financial analytics." },
  
  
  
];

export default function ReviewsPage() {
  return (
    
    <main className=" min-h-screen bg-black text-white flex justify-center py-10  mt-12 font-sans">
        <DotsBackground/>
      
      {/* Fixed Width Central Column */}
      <div className="mx-auto w-full max-w-4xl h-auto px-4 py-8  bg-white/1 backdrop-blur-xs border-2 border-white/20 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.6),0_0_20px_rgba(0,0,0,0.4)] ring-1 ring-white/5 ring-inset rounded-2xl  overflow-hidden group">
        
        {reviewsData.map((review) => (
          <div key={review.id} className="block  mb-6 p-5 my-5 mx-10 border-t-2 border-l-0 border-b-0 border-r-0 border-white/20   transition-colors">
            
            {/* Header: Name and Stars */}
            <div className="flex justify-between items-center   p-1 mb-4">
              <span className="font-bold">{review.name}</span>
              <span className="text-yellow-400">
                {"★".repeat(review.stars)}{"☆".repeat(5 - review.stars)}
              </span>
            </div>

            {/* Review Body: Mono font */}
            <div className="font-mono   p-1">
              {review.body}
            </div>
            
          </div>
        ))}

      </div>
    </main>
  );
}