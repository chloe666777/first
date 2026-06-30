import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const revealSelectors = [
  '.page-title',
  '.section__header',
  '.module-showcase',
  '.module-showcase__copy',
  '.feature-strip__item',
  '.product-home .card',
  '.trust-card',
  '.case-card',
  '.process-card',
  '.scene-card',
  '.scene-card h3',
  '.product-card',
  '.filter-bar button',
  '.product-tools > *',
  '.solution-panel',
  '.solution-stat-list > *',
  '.solution-product',
  '.solution-panel li',
  '.scenario-board',
  '.scenario-board > *',
  '.solution-proof-card',
  '.timeline-card',
  '.quality-panel',
  '.quality-panel span',
  '.spec-table',
  '.spec-table .row',
  '.contact-shell',
  '.contact-aside > *',
  '.quote-form label',
  '.form-actions',
  '.faq-section details',
  '.quote-card',
  '.quote-card > *',
];

const REVEAL_DELAY_GROUP_SIZE = 6;
const REVEAL_DELAY_STEP_MS = 55;

const getRevealGroup = (target) =>
  target.closest(
    '.solution-hero, .product-home, .trust-grid, .case-grid, .process-grid, .scene-grid, .product-grid, .filter-bar, .product-tools, .solution-stat-list, .solution-panel ul, .scenario-board, .solution-proof-grid, .process-timeline, .quality-panel div, .spec-table .table, .contact-aside, .quote-form, .quote-card, .faq-section > div',
  ) || target.parentElement;

export default function ScrollReveal() {
  const location = useLocation();

  useEffect(() => {
    const main = document.querySelector('.page-main');
    let observer;
    const observedTargets = new WeakSet();

    const prepareTarget = (target) => {
      if (observedTargets.has(target)) return;
      observedTargets.add(target);

      const group = getRevealGroup(target);
      const siblings = group
        ? Array.from(group.querySelectorAll(revealSelectors.join(','))).filter((item) => getRevealGroup(item) === group)
        : [target];
      const index = Math.max(siblings.indexOf(target), 0);

      target.classList.add('reveal-on-scroll');
      target.classList.remove('is-visible');
      const groupIndex = index % REVEAL_DELAY_GROUP_SIZE;
      target.style.setProperty('--reveal-delay', `${groupIndex * REVEAL_DELAY_STEP_MS}ms`);

      if (!observer) {
        target.classList.add('is-visible');
        return;
      }

      observer.observe(target);
    };

    const prepareTargets = (root = document) => {
      revealSelectors.forEach((selector) => {
        root.querySelectorAll(selector).forEach(prepareTarget);
      });
    };

    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { rootMargin: '0px 0px -10% 0px', threshold: 0.14 },
      );
    }

    prepareTargets();

    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType !== Node.ELEMENT_NODE) return;
          prepareTargets(node);
          if (revealSelectors.some((selector) => node.matches(selector))) {
            prepareTarget(node);
          }
        });
      });
    });

    if (main) {
      mutationObserver.observe(main, { childList: true, subtree: true });
    }

    return () => {
      mutationObserver.disconnect();
      if (observer) observer.disconnect();
    };
  }, [location.key]);

  return null;
}
