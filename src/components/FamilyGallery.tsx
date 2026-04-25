import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import { people } from "@/data/family";
import { PersonFrame } from "./PersonFrame";

type View =
  | { type: "root" }
  | { type: "children"; parentId: string; trail: string[] };

export function FamilyGallery() {
  const [view, setView] = useState<View>({ type: "root" });

  const goToChildren = (parentId: string) => {
    const parent = people[parentId];
    if (!parent.childrenIds || parent.childrenIds.length === 0) return;
    setView((prev) => ({
      type: "children",
      parentId,
      trail: prev.type === "children" ? [...prev.trail, parentId] : [parentId],
    }));
  };

  const goBack = () => {
    if (view.type !== "children") return;
    if (view.trail.length <= 1) {
      setView({ type: "root" });
    } else {
      const newTrail = view.trail.slice(0, -1);
      setView({
        type: "children",
        parentId: newTrail[newTrail.length - 1],
        trail: newTrail,
      });
    }
  };

  const renderRoot = () => {
    const dadi = people.dadi;
    return (
      <motion.div
        key="root"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="flex justify-center items-center min-h-[60vh] py-8"
      >
        <div className="float">
          <PersonFrame person={dadi} clickable onClick={() => goToChildren("dadi")} />
        </div>
      </motion.div>
    );
  };

  const renderChildren = () => {
    if (view.type !== "children") return null;
    const parent = people[view.parentId];
    const children = (parent.childrenIds ?? []).map((id) => people[id]);

    return (
      <motion.div
        key={`children-${view.parentId}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="py-6"
      >
        {/* Breadcrumb / parent label */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <p className="text-sm sm:text-base text-[var(--gold-light)]/80 italic">
            {parent.name} এর সন্তানগণ
          </p>
          <div className="mx-auto mt-2 h-[2px] w-24 bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent" />
        </motion.div>

        <div className="grid gap-8 sm:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto place-items-center">
          {children.map((child, i) => (
            <PersonFrame
              key={child.id}
              person={child}
              index={i}
              clickable={!!child.childrenIds?.length}
              onClick={
                child.childrenIds?.length ? () => goToChildren(child.id) : undefined
              }
            />
          ))}
        </div>
      </motion.div>
    );
  };

  return (
    <div className="relative">
      {/* Back button */}
      {view.type === "children" && (
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={goBack}
          className="fixed top-4 left-4 sm:top-6 sm:left-6 z-50 flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--frame)]/90 backdrop-blur-sm border border-[var(--gold)]/50 text-[var(--gold-light)] hover:bg-[var(--frame)] hover:scale-105 transition-all shadow-lg"
        >
          <ChevronLeft size={18} />
          <span className="text-sm font-semibold">পেছনে</span>
        </motion.button>
      )}

      <AnimatePresence mode="wait">
        {view.type === "root" ? renderRoot() : renderChildren()}
      </AnimatePresence>
    </div>
  );
}
