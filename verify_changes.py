from playwright.sync_api import sync_playwright
import time

def verify_frontend():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Test Blog Post with internal links
        print("Verifying blog post...")
        page.goto("http://localhost:3000/blog/ai-tools-replacing-saas")
        page.wait_for_load_state("networkidle")

        # Check for internal link existence
        links = page.locator("a[href*='/guides/']").all()
        if len(links) > 0:
            print(f"Found {len(links)} internal links in blog post.")
        else:
            print("WARNING: No internal links found in blog post.")

        page.screenshot(path="verification_blog.png", full_page=True)

        # Test Comparison Page with internal links
        print("Verifying comparison page...")
        page.goto("http://localhost:3000/compare/canva-vs-figma")
        page.wait_for_load_state("networkidle")

        # Check for injected links
        links = page.locator("a[href*='/guides/']").all()
        if len(links) > 0:
            print(f"Found {len(links)} internal links in comparison page.")
        else:
            print("WARNING: No internal links found in comparison page.")

        page.screenshot(path="verification_compare.png", full_page=True)

        # Test Guide Page with internal links
        print("Verifying guide page...")
        page.goto("http://localhost:3000/guides/best-ai-writing-assistants-2026")
        page.wait_for_load_state("networkidle")

        # Check for injected links in content
        # Note: We injected links into the content itself
        content_links = page.locator(".prose-style a").all()
        if len(content_links) > 0:
             print(f"Found {len(content_links)} internal links in guide content.")
        else:
             print("WARNING: No internal links found in guide content.")

        page.screenshot(path="verification_guide.png", full_page=True)

        browser.close()

if __name__ == "__main__":
    verify_frontend()
