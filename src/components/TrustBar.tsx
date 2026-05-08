import FlowingMenu from './FlowingMenu';

const TRUST_ITEMS = [
  { text: '20,000+ Transformations', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=400' },
  { text: '18+ Years Expert Healing', image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=400' },
  { text: '4.9/5 Google Rating', image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=400' },
  { text: '100% Natural — No Pills', image: 'https://images.unsplash.com/photo-1540331547168-8b63109225b7?auto=format&fit=crop&q=80&w=400' },
  { text: 'Wellness Awards Winner', image: 'https://images.unsplash.com/photo-1518173946687-a4c8a9833d8e?auto=format&fit=crop&q=80&w=400' },
];

export default function TrustBar() {
  const items = TRUST_ITEMS.map(item => ({
    ...item,
    link: '#trust'
  }));

  return (
    <section id="trust" className="relative z-20 border-y border-black/10">
      <div className="w-full" style={{ height: 'auto' }}>
        <FlowingMenu 
          items={items} 
          bgColor="var(--color-brand-amber)" 
          textColor="#111" 
          marqueeBgColor="#111" 
          marqueeTextColor="var(--color-brand-amber)"
          borderColor="rgba(0,0,0,0.1)"
          speed={10}
          autoHoverInterval={4000}
          isGrid={true}
        />
      </div>
      
      <style>{`
        .menu-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
        }
        
        @media (max-width: 1024px) {
          .menu-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        @media (max-width: 640px) {
          .menu-grid {
            grid-template-columns: 1fr;
          }
        }

        .menu__item {
           border-top: none !important;
           border-right: 1px solid rgba(0,0,0,0.1);
           border-bottom: 1px solid rgba(0,0,0,0.1);
        }

        .menu__item:nth-child(4n) {
          border-right: none;
        }

        .menu__item-link {
          font-size: 14px !important;
          font-weight: 800 !important;
          letter-spacing: 1px;
        }

        .marquee span {
          font-size: 14px !important;
          font-weight: 800 !important;
        }
      `}</style>
    </section>
  );
}
