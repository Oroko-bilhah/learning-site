import { Link } from "react-router-dom";
import { useState } from 'react'
import { scopedStorageKey } from '../auth'
import '../App.css'

function Bookmarks () {
    const [bookmarks, setBookmarks] = useState(() => {
        try {
          const saved = JSON.parse(localStorage.getItem(scopedStorageKey('elimuNestBookmarks')) || '[]')
          return Array.isArray(saved) ? saved : []
        } catch {
          return []
        }
    })
    return (
        <main className="bookmarks-page">
            <Link to="/subjects" className="back-link">
              ← Browse subjects
            </Link>
            <header className="bookmarks-header">
            <p className="eyebrow">YOUR LEARNING SPACE</p>
            <h1>Saved lessons</h1>
            <p> Keep your important lessons close and return to them when you're ready to learn. </p>
            </header>
        {bookmarks.length === 0 ? (
            <section className="bookmarks-empty">
                <h2>No saved lessons yet.</h2>
                <p>
                    Open a lesson and select "Bookmark lesson" to save it here.
                </p>
        <Link to="/subjects" className="primary-button">
            Explore subjects
        </Link>
            </section>

        ):
        (
            <section className="bookmarks-list">
            {bookmarks.map((slug)=> (
                <article className="bookmark-card" key={slug}>
                    <div>
                        <h2>
                        {slug
                            .split('-')
                            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                            .join(' ')}
                        </h2>
                    <p> Saved lesson </p>
                    </div>
                    <Link
                to={`/subjects/form-3/mathematics/lessons/${slug}`}
                className="subject-link"
              >
                Open lesson →
              </Link>

              <button
                type="button"
                className="bookmark-remove"
                onClick={() => {
                  const updated = bookmarks.filter(
                    (item) => item !== slug
                  )

                  localStorage.setItem(
                    scopedStorageKey('elimuNestBookmarks'),
                    JSON.stringify(updated)
                  )

                  setBookmarks(updated)
                }}
              >
                Remove
              </button>
                </article>
            ))
            }

            </section>
        )

        }

        </main>
    )
}
 export default Bookmarks
