import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ExternalLink,
  Sparkles,
  Code2,
  Zap,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const ProjectLayout = ({
  title,
  subtitle,
  category,
  heroImage,
  additionalImages = [],
  images,
  liveUrl,
  githubUrl,
  role,
  timeline,
  stats = [],
  overview,
  techStack = {
    frontend: [],
    backend: [],
    database: [],
    tools: [],
  },
  prevProject,
  nextProject,
}) => {
  const normalizedImages = React.useMemo(() => {
    if (Array.isArray(images) && images.length > 0) {
      return images.map((img) => {
        if (typeof img === 'string') {
          return { src: img };
        }
        return {
          src: img.src || img.image || img.url || img,
        };
      });
    }

    const list = [];
    if (heroImage) {
      list.push({ src: heroImage });
    }
    if (Array.isArray(additionalImages)) {
      additionalImages.forEach((img) => {
        if (typeof img === 'string') {
          list.push({ src: img });
        } else if (img && img.src) {
          list.push({ src: img.src });
        }
      });
    }
    return list.length > 0 ? list : [{ src: '' }];
  }, [images, heroImage, additionalImages]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const thumbnailsRef = useRef(null);

  const totalImages = normalizedImages.length;
  const currentSlide = normalizedImages[currentIndex] || normalizedImages[0];

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalImages);
  }, [totalImages]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalImages) % totalImages);
  }, [totalImages]);

  const goToSlide = (idx) => {
    setCurrentIndex(idx);
  };

  useEffect(() => {
    if (thumbnailsRef.current) {
      const activeThumb = thumbnailsRef.current.children[currentIndex];
      if (activeThumb) {
        activeThumb.scrollIntoView({
          behavior: 'smooth',
          inline: 'center',
          block: 'nearest',
        });
      }
    }
  }, [currentIndex]);

  useEffect(() => {
    if (!isModalOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsModalOpen(false);
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen, handleNext, handlePrev]);

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-20">
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-md transition-opacity duration-300"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative flex flex-col items-center max-h-[95vh] max-w-6xl w-full overflow-hidden rounded-2xl bg-gray-950 p-3 shadow-2xl border border-white/10"
            onClick={(e) => e.stopPropagation()}>
            <div className="flex w-full items-center justify-between px-3 py-2 border-b border-white/10 text-white">
              <div className="flex items-center gap-3">
                <span className="rounded-lg bg-blue-600/80 px-2.5 py-1 text-xs font-semibold text-white">
                  {currentIndex + 1} / {totalImages}
                </span>
                <span className="text-sm font-medium text-gray-300">
                  {title}
                </span>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 hover:text-white"
                aria-label="Close full size view"
              >
                <X size={18} />
              </button>
            </div>
            <div className="relative flex w-full items-center justify-center py-4 overflow-hidden min-h-[50vh] max-h-[75vh]">
              <img
                src={currentSlide.src}
                alt={title}
                className="max-h-[72vh] w-auto max-w-full rounded-xl object-contain shadow-2xl transition-all duration-300"
              />

              {totalImages > 1 && (
                <>
                  <button
                    onClick={handlePrev}
                    className="absolute left-3 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-black/70 text-white backdrop-blur-md transition-all hover:bg-blue-600 hover:scale-105"
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={22} />
                  </button>
                  <button
                    onClick={handleNext}
                    className="absolute right-3 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-black/70 text-white backdrop-blur-md transition-all hover:bg-blue-600 hover:scale-105"
                    aria-label="Next image"
                  >
                    <ChevronRight size={22} />
                  </button>
                </>
              )}
            </div>
            {totalImages > 1 && (
              <div className="flex w-full items-center justify-center gap-2 overflow-x-auto py-2 border-t border-white/10 px-2">
                {normalizedImages.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => goToSlide(idx)}
                    className={`relative h-14 w-22 shrink-0 overflow-hidden rounded-lg border-2 transition-all ${
                      currentIndex === idx
                        ? 'border-blue-500 scale-105 ring-2 ring-blue-500/40 opacity-100'
                        : 'border-transparent opacity-50 hover:opacity-90'
                    }`}
                  >
                    <img
                      src={img.src}
                      alt={`Thumbnail ${idx + 1}`}
                      className="h-full w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <Link
            to="/projects"
            className="group inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-gray-700 shadow-sm transition-all duration-200 hover:border-gray-900 hover:bg-gray-900 hover:text-white"
          >
            <ArrowLeft
              size={16}
              className="transition-transform duration-200 group-hover:-translate-x-1"
            />
            <span>Back to All Projects</span>
          </Link>

          <div className="flex items-center gap-3">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-gray-700 shadow-sm transition-all duration-200 hover:border-gray-300 hover:bg-gray-50"
              >
                <FaGithub size={16} />
                <span>Source Code</span>
              </a>
            )}
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-blue-500/20 transition-all duration-200 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/30"
              >
                <span>Live Website</span>
                <ExternalLink size={16} />
              </a>
            )}
          </div>
        </div>
        <header className="mb-10 text-left">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-100 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-700">
            <Sparkles size={13} className="text-blue-600" />
            <span>{category}</span>
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-950 sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-gray-600 sm:text-lg">
            {subtitle}
          </p>
        </header>
        <section className="mb-14">
          <div className="overflow-hidden rounded-2xl border border-gray-200/80 bg-white shadow-xl transition-all">
            <div className="flex items-center justify-between gap-3 border-b border-gray-100 bg-gray-50/90 px-4 py-3 text-xs text-gray-600">
              <div className="flex items-center gap-3 shrink-0">
                {liveUrl && (
                  <a
                    href={liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-[11px] font-medium text-gray-700 border border-gray-200/90 shadow-2xs transition-all hover:bg-gray-100 hover:text-blue-600 hover:border-blue-200 group"
                    title="Open Live Preview in new tab"
                  >
                    <span className="h-2 w-2 rounded-full bg-emerald-500 shrink-0 animate-pulse" />
                    <span className="font-mono truncate max-w-[120px] sm:max-w-[200px]">
                      {liveUrl.replace(/^https?:\/\//, '')}
                    </span>
                    <ExternalLink size={11} className="text-gray-400 group-hover:text-blue-600 transition-colors shrink-0" />
                  </a>
                )}
              </div>

              <div className="flex-1 flex items-center justify-center px-2 min-w-0 text-center">
                <span className="font-semibold text-gray-800 text-xs sm:text-sm truncate">
                  {title}
                </span>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                {totalImages > 1 && (
                  <span className="rounded-lg bg-white px-2.5 py-1 font-semibold text-gray-700 border border-gray-200/80 shadow-2xs text-[11px]">
                    <span className="text-blue-600 font-bold">{currentIndex + 1}</span> / {totalImages}
                  </span>
                )}
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="flex items-center gap-1.5 rounded-lg bg-white px-3 py-1 text-[11px] font-semibold text-gray-700 border border-gray-200/80 shadow-2xs transition-all hover:bg-gray-100 hover:text-gray-900"
                  aria-label="View screenshot in full size">
                  <Maximize2 size={13} />
                  <span>Full Size</span>
                </button>
              </div>
            </div>
            <div className="group relative flex items-center justify-center bg-gray-950 min-h-[280px] sm:min-h-[440px] lg:min-h-[540px] p-2 sm:p-4">
              <img
                key={currentIndex}
                src={currentSlide.src}
                alt={title}
                className="w-full object-contain max-h-[580px] rounded-lg transition-all duration-300 shadow-2xl"
              />
              {totalImages > 1 && (
                <>
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="absolute left-4 top-1/2 -translate-y-1/2 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-200 hover:bg-blue-600 hover:scale-105 active:scale-95 shadow-xl"
                    aria-label="Previous screenshot"
                  >
                    <ChevronLeft size={22} />
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-200 hover:bg-blue-600 hover:scale-105 active:scale-95 shadow-xl"
                    aria-label="Next screenshot"
                  >
                    <ChevronRight size={22} />
                  </button>
                </>
              )}
            </div>

            {totalImages > 1 && (
              <div className="border-t border-gray-100 bg-white p-3 sm:p-4">
                <div
                  ref={thumbnailsRef}
                  className="flex items-center gap-3 overflow-x-auto pb-1 scrollbar-thin scrollbar-thumb-gray-200"
                >
                  {normalizedImages.map((img, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => goToSlide(idx)}
                      className={`group relative h-16 w-28 sm:h-20 sm:w-32 shrink-0 overflow-hidden rounded-xl border-2 transition-all duration-200 ${
                        currentIndex === idx
                          ? 'border-blue-600 ring-2 ring-blue-600/30 scale-[1.02] shadow-sm'
                          : 'border-gray-200 opacity-60 hover:opacity-100 hover:border-gray-300'
                      }`}
                    >
                      <img
                        src={img.src}
                        alt={`Preview ${idx + 1}`}
                        className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-105"
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
          {stats.length > 0 && (
            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-gray-200 bg-white p-4 text-center shadow-xs transition-transform hover:-translate-y-0.5"
                >
                  <div className="text-2xl font-bold text-gray-900 sm:text-3xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs font-medium text-gray-500 sm:text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="space-y-8 lg:col-span-2">
            <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="mb-5 flex items-center gap-2 text-blue-600">
                <Zap size={22} className="text-blue-600" />
                <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
                  About the Project
                </h2>
              </div>
              <div className="prose prose-blue max-w-none text-gray-600 space-y-4 leading-relaxed sm:text-[15px]">
                {overview}
              </div>
            </section>
          </div>
          <div className="space-y-8">
            <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-5 flex items-center gap-2 text-blue-600">
                <Code2 size={20} />
                <h2 className="text-lg font-bold text-gray-900">
                  Technologies Used
                </h2>
              </div>
              <div className="space-y-5 text-sm">
                {techStack.frontend?.length > 0 && (
                  <div>
                    <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500">
                      Frontend
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {techStack.frontend.map((t, idx) => (
                        <span
                          key={idx}
                          className="rounded-lg bg-blue-50 border border-blue-100 px-2.5 py-1 text-xs font-medium text-blue-700 transition-colors hover:bg-blue-100"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {techStack.backend?.length > 0 && (
                  <div>
                    <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500">
                      Backend & APIs
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {techStack.backend.map((t, idx) => (
                        <span
                          key={idx}
                          className="rounded-lg bg-emerald-50 border border-emerald-100 px-2.5 py-1 text-xs font-medium text-emerald-700 transition-colors hover:bg-emerald-100"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {techStack.database?.length > 0 && (
                  <div>
                    <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500">
                      Database & Storage
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {techStack.database.map((t, idx) => (
                        <span
                          key={idx}
                          className="rounded-lg bg-amber-50 border border-amber-100 px-2.5 py-1 text-xs font-medium text-amber-800 transition-colors hover:bg-amber-100"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {techStack.tools?.length > 0 && (
                  <div>
                    <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500">
                      Tools, AI & Services
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {techStack.tools.map((t, idx) => (
                        <span
                          key={idx}
                          className="rounded-lg bg-purple-50 border border-purple-100 px-2.5 py-1 text-xs font-medium text-purple-700 transition-colors hover:bg-purple-100"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </section>
          </div>
        </div>
        <div className="mt-16 border-t border-gray-200 pt-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {prevProject ? (
              <Link
                to={prevProject.link}
                className="group flex flex-col rounded-2xl border border-gray-200 bg-white p-5 text-left shadow-xs transition-all hover:border-blue-300 hover:shadow-md"
              >
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 group-hover:text-blue-600">
                  ← Previous Project
                </span>
                <span className="mt-1 text-base font-bold text-gray-900 group-hover:text-blue-600">
                  {prevProject.title}
                </span>
              </Link>
            ) : (
              <div />
            )}
            {nextProject && (
              <Link
                to={nextProject.link}
                className="group flex flex-col rounded-2xl border border-gray-200 bg-white p-5 text-right shadow-xs transition-all hover:border-blue-300 hover:shadow-md"
              >
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 group-hover:text-blue-600">
                  Next Project →
                </span>
                <span className="mt-1 text-base font-bold text-gray-900 group-hover:text-blue-600">
                  {nextProject.title}
                </span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectLayout;
